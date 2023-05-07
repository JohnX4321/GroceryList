import React from "react";
import {KeyboardAvoidingView, StyleSheet, Platform, Pressable} from "react-native";
import {IconButton,withTheme,TextInput} from "react-native-paper";

const NewGroceryItem = (props) => {
    const [title,setTitle] = React.useState("");
    
    const save  = () => {
        if (title!=="") {
            props.addItem(title);
            setTitle("")
        }
    };
    
    return (
        <KeyboardAvoidingView
            style={styles.container} behavior={Platform.OS==="ios"?"padding":"height"}>
            <TextInput
                style={[styles.textInput,{color: "white"}]}
                value={title}
                onChangeText={setTitle}
                placeholder="Add Grocery Item"
                placeholderTextColor={props.theme.placeholder}
                onSubmitEditing={save} />
            <Pressable style={styles.addBtn} onPress={save}>
                <IconButton icon="plus" style={{height: 20}} iconColor={props.theme.colors.placeholder}/>
            </Pressable>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: "auto",
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    textInput: {
        flex: 1,
        height: 20,
        marginRight: 20,
        fontSize: 16,
        paddingTop: 10,
        textAlignVertical: "center"
    },
    addBtn: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: 40,
        height: 40,
        borderRadius: 22,
        shadowOffset: {
            width: 0,
            height: 5
        }
    }
});

export default withTheme(NewGroceryItem);