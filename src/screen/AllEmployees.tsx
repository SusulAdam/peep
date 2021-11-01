import * as React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function AllEmployess(): JSX.Element {
  const screenState = useSelector((state: RootState) => state.userList);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {screenState.loading && <Text>LOADIND</Text>}
      {screenState.error && <Text>Error</Text>}
      {!screenState.loading && !screenState.error && <Text>user</Text>}
    </View>
  );
}

export { AllEmployess };
