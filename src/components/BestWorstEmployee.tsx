import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  View,
  Text,
  ViewStyle,
  ScrollView,
  TextStyle,
  Image,
  TouchableOpacity,
  ImageStyle,
} from "react-native";
import { COLORS } from "../constans/theme";
import { RootState } from "../redux/store";
import { User } from "../redux/UserListSlice";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  title: string;
  apiName: string;
  apiEmail: string;
  apiPicture: string;
  apiNameLast: string;
  assumption: string;
  hours: string;
  buttonText: string;
  position: string;
  assumptionBar: string;
  hoursBar: string;
  rating: string;
  perfectRating: boolean;
};

const BestWorstEmployee = ({
  title,
  assumption,
  hours,
  buttonText,
  position,
  assumptionBar,
  hoursBar,

  apiPicture,
  apiEmail,
  apiName,
  rating,
  perfectRating,
  apiNameLast,
}: Props): JSX.Element => {
  return (
    <View style={styles.wrapperStyles}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <View style={styles.personContainer}>
          <Image style={styles.image} source={{ uri: apiPicture }} />
          <View>
            <Text style={styles.apiName}>
              {apiName} {apiNameLast}
            </Text>
            <Text style={styles.position}>{position}</Text>

            <Text style={styles.apiEmail}>{apiEmail}</Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.box}>
            <Text style={styles.dataText}>Realized design assumptions</Text>
            <Text style={styles.dataText}>{assumption}</Text>
          </View>
          <View style={styles.bar}>
            <LinearGradient
              colors={["#CC4E3D", "#F48F81"]}
              style={[styles.gradient, { width: assumptionBar }]}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.dataText}>Hours worked per month</Text>
            <Text style={styles.dataText}>{hours}</Text>
          </View>
          <View style={styles.bar}>
            <LinearGradient
              colors={["#CC4E3D", "#F48F81"]}
              style={[styles.gradient, { width: hoursBar }]}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.dataText}>Team leader rating</Text>
            <Text style={styles.dataText}>{rating}</Text>
          </View>
          <View style={styles.stars}>
            {perfectRating ? (
              <>
                <FontAwesome
                  name="star"
                  size={24}
                  color="#E97D6E"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={24}
                  color="#E97D6E"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={24}
                  color="#E97D6E"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={24}
                  color="#E97D6E"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={24}
                  color="#E97D6E"
                  style={styles.star}
                />
              </>
            ) : (
              <>
                <FontAwesome
                  name="star"
                  size={24}
                  color="#E97D6E"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={24}
                  color="black"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={24}
                  color="black"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={24}
                  color="black"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={24}
                  color="black"
                  style={styles.star}
                />
              </>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

type Style = {
  wrapperStyles: ViewStyle;
  container: ViewStyle;
  personContainer: ViewStyle;
  dataContainer: ViewStyle;
  gradient: ViewStyle;
  bar: ViewStyle;
  image: ImageStyle;
  box: ViewStyle;
  stars: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  title: TextStyle;
  apiName: TextStyle;
  dataText: TextStyle;
  position: TextStyle;
  apiEmail: TextStyle;
  star: TextStyle;
};

const styles: Style = {
  wrapperStyles: {
    width: "100%",
    marginTop: 25,
  },
  bar: {
    backgroundColor: "black",
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    marginLeft: 25,
    color: COLORS.white,
    marginBottom: 10,
  },
  container: {
    backgroundColor: COLORS["violet-dark-4"],
    opacity: 0.67,
    width: "100%",
    maxHeight: "100%",
    borderRadius: 5,
    paddingRight: 25,
    paddingTop: 25,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 120,
    marginLeft: 20,
  },
  personContainer: {
    flexDirection: "row",
  },
  apiName: {
    color: COLORS.white,
    fontSize: 23,
    paddingLeft: 10,
    paddingTop: 10,
  },
  position: {
    color: COLORS.white,
    fontSize: 12,
    paddingTop: 10,
    paddingLeft: 10,
  },
  apiEmail: {
    color: COLORS.white,
    fontSize: 12,
    paddingTop: 10,
    paddingLeft: 10,
    flexShrink: 1,
  },
  dataContainer: {
    paddingLeft: 30,
    paddingRight: 5,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  dataText: {
    color: COLORS.white,
  },
  gradient: {
    height: 5,
    borderRadius: 5,
  },
  stars: {
    flexDirection: "row",
    marginTop: 5,
  },
  star: {
    paddingRight: 8,
  },
  button: {
    maxWidth: "100%",
    paddingVertical: 15,
    backgroundColor: COLORS["violet-dark"],
    marginLeft: 25,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.white,
  },
};

export { BestWorstEmployee };
