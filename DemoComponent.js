import React, { useState } from "react";
import { View, TouchableOpacity, Button, Pressable, StyleSheet } from "react-native";
import AppText from "./AppText";

const DemoComponent = (props) => {

    const [count, setCount] = useState(0);
    const [test, setTest] = useState("press");

    return (
        <View style={styles.container} >
            <AppText large style={{color: "red"}} >{props.title}</AppText>
            <View>  
                <AppText>Count: {count}</AppText>
            </View>
            <View>
                <AppText small onPress={()=>setCount(count+1)} >Add</AppText>
            </View>
            <TouchableOpacity onPress={()=>setCount(count-1)} >
                <AppText small >Minus</AppText>
            </TouchableOpacity>
            <Button onPress={()=>setCount(0)} title="Click Me (reset)" />
            <Pressable 
                onPressIn={()=>setTest("on press in")} 
                onPressOut={()=>setTest("on press out")} 
                onPress={()=>setTest("on press")} 
                onLongPress={()=>setTest("on long press")} 
                >
                <AppText>Pressable: {test}</AppText>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: "red",
    },
    centerText: {
        textAlign: "center",

    }
})

export default DemoComponent;