import React from "react";
import {StyleSheet, Platform, StatusBar, View, SafeAreaView, FlatList} from "react-native";
import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import {Appbar,Text,Provider,MD3DarkTheme,DefaultTheme} from "react-native-paper";
import GroceryItem from "../utils/GroceryItemContainer";
import NewGroceryItem from "../utils/NewItemContainer";

const Home = (props) => {
    console.log(props);
    const done = props.items.filter((i)=>i.done)
    const remaining = props.items.filter((i)=>!i.done)
    const theme = props.darkMode?MD3DarkTheme:DefaultTheme;
    return (
        <Provider {...{theme}}>
            <SafeAreaView style={[styles.container,{backgroundColor: theme.colors.background}]}>
            <ExpoStatusBar style="auto" />
            <Appbar>
                <Appbar.Content title="Grocery List" />
                <Appbar.Action icon="theme-light-dark" onPress={()=>{props.switchTheme()}} />
            </Appbar>
            <View style={styles.list}>
                <Text style={styles.listHeader}>Yet to Get</Text>
                {
                remaining.length!==0?(
                    <FlatList data={remaining} renderItem={({item})=><GroceryItem {...item} />}
                        keyExtractor={(item)=>item.id} />
                        ): (
                    <Text style={styles.listEmptyHeader}>Empty</Text>
                        )
                }
            </View>
            <View style={styles.divider} />
            <View style={styles.list}>
                <Text style={styles.listHeader}>Picked</Text>
                {
                done.length!==0?(
                    <FlatList data={done} renderItem={({item})=><GroceryItem {...item} />}
                        keyExtractor={(item)=>item.id} />
                        ): (
                            <Text style={styles.listEmptyHeader}>Empty</Text>
                            )
                }
            </View>
            <NewGroceryItem />
        </SafeAreaView>
        </Provider>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS==="ios"?0:StatusBar.currentHeight,
    },
    title: {
        marginBottom: 40,
        paddingHorizontal: 15,
        fontSize: 50,
        fontWeight: "500"
    },
    divider: {
        marginHorizontal: 10,
        marginTop: 25,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    list: {
        flex: 1
    },
    listHeader: {
        marginBottom: 25,
        paddingHorizontal: 10,
        fontSize: 40,
        fontWeight: "400"
    },
    listEmptyHeader: {
        padding: 10,
        fontSize: 15,
        lineHeight: 20
    }
});

export default Home;