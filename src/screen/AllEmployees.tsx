import React, { FunctionComponent, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/UserListSlice";
import { RootState } from "../redux/store";
import { User } from "../redux/UserListSlice";

const AllEmployess: FunctionComponent = () => {
  const dispatch = useDispatch();

  const screenState = useSelector((state: RootState) => state.userList);

  useEffect(() => {
    dispatch(fetchUsers({ page: 2 }));
  }, []);

  return (
    <>
      {screenState.loading && <Text>LOADING</Text>}
      {screenState.error && <Text>ERROR</Text>}
      <FlatList
        data={screenState.users}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => <UserListItem user={item} />}
      />
    </>
  );
};

const UserListItem: FunctionComponent<{ user: User }> = ({ user }) => {
  return (
    <View>
      <Image source={{ uri: user.picture.thumbnail }} />
      <Text>{user.name.first}</Text>
    </View>
  );
};

export { AllEmployess };
