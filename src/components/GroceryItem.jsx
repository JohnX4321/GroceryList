import React from "react";
import { StyleSheet, View} from "react-native";
import {Checkbox,IconButton,Text,withTheme} from "react-native-paper";


const GroceryItem = (props) => (
    <View style={styles.container}>
        <Checkbox status={props.done?"checked":"unchecked"}
            onPress={()=>props.completeItem(props.id)} />
        <Text style={[styles.text,props.done && styles.textDone]}>{props.title}</Text>
        <IconButton icon="delete" style={{marginRight: 0,height: 20}}
            onPress={()=>props.deleteItem(props.id)} hitSlop={10} />
    </View>
)


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        flex: 1
    },
    checkbox: {
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 20,
        marginEnd: 15,
        borderRadius: 6
    },
    checkboxTicker: {
        shadowOpacity: 0.14,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 5
        }
    },
    text: {
        margin: "auto",
        paddingRight: 25,
        fontSize: 16,
        lineHeight: 22
    },
    textDone: {
        opacity: 0.3,
        textDecorationLine: "line-through"
    },
    deleteBtn: {
        opacity: 0.3
    }
})

export default withTheme(GroceryItem);