import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, Pressable } from "react-native";

const DemoComponent = (props) => {

    const [count, setCount] = useState(0);
    const [test, setTest] = useState("press");

    return (
        <View>
            <Text>{props.title}</Text>
            <View>
                <Text>Count: {count}</Text>
            </View>
            <View>
                <Text onPress={()=>setCount(count+1)} >Add</Text>
            </View>
            <TouchableOpacity onPress={()=>setCount(count-1)} >
                <Text>Minus</Text>
            </TouchableOpacity>
            <Button onPress={()=>setCount(0)} title="Click Me" />
            <Pressable 
                onPressIn={()=>setTest("on press in")} 
                onPressOut={()=>setTest("on press out")} 
                onPress={()=>setTest("on press")} 
                onLongPress={()=>setTest("on long press")} 
                >
                <Text>Pressable: {test}</Text>
            </Pressable>
        </View>
    )
}

export default DemoComponent;