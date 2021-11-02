import * as React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/UserListSlice";
import { RootState } from "../redux/store";

function AllEmployess(): JSX.Element {
  const dispatch = useDispatch();
  const screenState = useSelector((state: RootState) => state.userList);

  React.useEffect(() => {
    dispatch(fetchUsers({ page: 1 }));
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {screenState.loading && <Text>LOADIND</Text>}
      {screenState.error && <Text>Error</Text>}
      {!screenState.loading && !screenState.error && <Text>user</Text>}
      <Text>{JSON.stringify(screenState.users)}</Text>
    </View>
  );
}

export { AllEmployess };
