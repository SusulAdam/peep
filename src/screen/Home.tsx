import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { View, Text, ViewStyle, ScrollView, TextStyle } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../constans/theme";
import { fetchUsers } from "../redux/UserListSlice";
import { RootState } from "../redux/store";
import { BestWorstEmployee } from "../components/BestWorstEmployee";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

function HomeScreen(): JSX.Element {
  const dispatch = useDispatch();

  const screenState = useSelector((state: RootState) => state.userList);

  React.useEffect(() => {
    dispatch(fetchUsers({ page: 1 }));
  }, []);

  return (
    <ScrollView contentContainerStyle={style.scroll} nestedScrollEnabled>
      <LinearGradient colors={["#535162", "#222128"]} style={style.gradient}>
        <Text style={style.userTittle}>User ID</Text>
        <View style={style.header}>
          <Text style={style.nickName}>John Jones</Text>
          <Text style={style.userDescription}>
            Human Resource Management Director
          </Text>
          <Text style={style.userDescription}>johnjones@company.com</Text>
        </View>
        <BestWorstEmployee
          apiEmail={screenState.users[1]?.email}
          apiName={screenState.users[1]?.name.first}
          apiNameLast={screenState.users[1]?.name.last}
          apiPicture={screenState.users[1]?.picture.large}
          title={"Best employee"}
          position="React Native Developer"
          perfectRating={true}
          assumption="100%"
          assumptionBar="100%"
          buttonText="Send bonus"
          hours="180/180h"
          hoursBar="100%"
          rating="10/10"
        />
        <BestWorstEmployee
          apiEmail={screenState.users[2]?.email}
          apiName={screenState.users[2]?.name.first}
          apiNameLast={screenState.users[2]?.name.last}
          apiPicture={screenState.users[2]?.picture.large}
          title={"Worst employee"}
          position="UI Designer"
          perfectRating={false}
          assumption="10%"
          assumptionBar="10%"
          buttonText="Contact with leader"
          hours="60/180"
          hoursBar="33%"
          rating="2/10"
        />
      </LinearGradient>
    </ScrollView>
  );
}

type Style = {
  gradient: ViewStyle;
  scroll: ViewStyle;
  header: ViewStyle;
  userTittle: TextStyle;
  nickName: TextStyle;
  userDescription: TextStyle;
};

const style: Style = {
  gradient: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 50,
  },
  scroll: {
    flexGrow: 1,
  },
  userTittle: {
    color: COLORS.white,
    fontSize: 20,
    marginLeft: 30,
  },
  header: {
    width: "100%",
    maxHeight: "100%",
    backgroundColor: COLORS["violet-dark"],
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  nickName: {
    color: COLORS.white,
    fontSize: 18,
    marginBottom: 8,
  },
  userDescription: {
    fontSize: 14,
    color: COLORS.white,
    marginVertical: 5,
  },
};

export { HomeScreen };
