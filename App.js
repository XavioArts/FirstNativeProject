import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import DemoComponent from "./DemoComponent";

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>We have text here</Text>
        <DemoComponent title={"Counter 1"} />
        <DemoComponent title={"Counter 2"} />
      </View>
    </SafeAreaView>
  )
};

export default App;