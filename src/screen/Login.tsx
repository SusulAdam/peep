import * as React from "react";
import { View, Text, Button } from "react-native";

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login screen </Text>
      <Button title="press" onPress={() => navigation.navigate("Tabs")} />
    </View>
  );
}

export { LoginScreen };
