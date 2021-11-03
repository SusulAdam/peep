import React, { FunctionComponent, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/UserListSlice";
import { RootState } from "../redux/store";
import { User } from "../redux/UserListSlice";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constans/theme";

const AllEmployess: FunctionComponent = () => {
  const dispatch = useDispatch();

  const screenState = useSelector((state: RootState) => state.userList);

  useEffect(() => {
    dispatch(fetchUsers({ page: 2 }));
  }, []);

  return (
    <>
      <>
        {screenState.loading && (
          <View>
            <LinearGradient
              colors={["#535162", "#222128"]}
              style={[styles.gradient, styles.gradientLoading]}
            >
              <Text style={styles.loading}>LOADING</Text>
            </LinearGradient>
          </View>
        )}
        {screenState.error && (
          <View>
            <LinearGradient
              colors={["#535162", "#222128"]}
              style={[styles.gradient, styles.gradientLoading]}
            >
              <Text style={styles.loading}>ERROR</Text>
            </LinearGradient>
          </View>
        )}
      </>
      <LinearGradient colors={["#535162", "#222128"]} style={styles.gradient}>
        <FlatList
          data={screenState.users}
          keyExtractor={(_, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => <UserListItem user={item} />}
        />
      </LinearGradient>
    </>
  );
};

const UserListItem: FunctionComponent<{ user: User }> = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: user.picture.thumbnail }} />
      <View>
        <Text style={styles.text}>
          {user.name.first} {user.name.last}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

type Styles = {
  gradient: ViewStyle;
  gradientLoading: ViewStyle;
  loading: TextStyle;
  text: TextStyle;
  email: TextStyle;
  image: ImageStyle;
  container: ViewStyle;
};

const styles: Styles = {
  gradient: {
    flex: 1,
    paddingTop: 70,
    justifyContent: "center",
  },
  gradientLoading: {
    alignItems: "center",
  },
  loading: {
    fontSize: 30,
    color: COLORS.white,
  },
  container: {
    backgroundColor: COLORS["violet-dark_5"],
    borderRadius: 30,
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 10,
    paddingLeft: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 2,
  },
  text: {
    color: COLORS.white,
  },
  email: {
    color: COLORS.white,
    opacity: 0.5,
  },
};

export { AllEmployess };
