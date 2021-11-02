import * as React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

type RootStackParamList = {
  Tabs: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Tabs">;

function LoginScreen({ navigation }: Props): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login screen </Text>

      <Button title="press" onPress={() => navigation.navigate("Tabs")} />
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
}

export { LoginScreen };
