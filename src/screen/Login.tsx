import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ViewStyle,
  ImageStyle,
  TextStyle,
  TextInput,
  Pressable,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../constans/theme";

type RootStackParamList = {
  Tabs: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Tabs">;

function LoginScreen({ navigation }: Props): JSX.Element {
  const [userName, onChangeUserName] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const [isCorrectAuth, setIsCorrectAuth] = React.useState(false);

  const handleLogin = () => {
    if (userName === "Boss" && password === "123") {
      setIsCorrectAuth(false);
      navigation.navigate("Tabs");
    } else {
      setIsCorrectAuth(true);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/img/loginBackground.jpg")}
      style={style.backgroundImage}
    >
      <Pressable
        onPress={() => Keyboard.dismiss()}
        style={style.dissmissKeyboard}
      >
        <View style={style.mainContainer}>
          <Image
            source={require("../assets/img/logo.png")}
            style={style.logo}
            resizeMode="contain"
          />
          <Text style={style.titile}>Welcome </Text>
          <Text style={style.subTitle}>
            in employees monitoring app. Being a boss has never been so easy!{" "}
          </Text>
          <View style={style.authenticationContainer}>
            <TextInput
              value={userName}
              onChangeText={onChangeUserName}
              style={style.textInput}
              placeholder="Username"
              placeholderTextColor={COLORS.grey_dark_2}
            />
            <TextInput
              value={password}
              onChangeText={onChangePassword}
              style={style.textInput}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={COLORS.grey_dark_2}
            />
            {isCorrectAuth && (
              <Text style={style.errorText}>
                Incorrect username or password
              </Text>
            )}
            <TouchableOpacity>
              <Text style={style.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.button}
              activeOpacity={0.8}
              onPress={handleLogin}
            >
              <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </ImageBackground>
  );
}

type Style = {
  backgroundImage: ViewStyle;
  logo: ImageStyle;
  titile: TextStyle;
  subTitle: TextStyle;
  authenticationContainer: ViewStyle;
  textInput: ViewStyle;
  errorText: TextStyle;
  button: ViewStyle;
  mainContainer: ViewStyle;
  forgotText: TextStyle;
  buttonText: TextStyle;
  dissmissKeyboard: TextStyle;
};

const style: Style = {
  backgroundImage: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  dissmissKeyboard: {
    flex: 1,
  },
  logo: {
    maxWidth: 150,
  },
  titile: {
    fontSize: 55,
    color: COLORS.white,
  },
  subTitle: {
    fontSize: 13,
    color: COLORS.white,
    textAlign: "center",
    width: "60%",
    paddingTop: 10,
  },
  authenticationContainer: {
    maxHeight: 3000,
    backgroundColor: COLORS.grey_dark_1,
    width: "90%",
    marginVertical: 20,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "95%",
    height: 50,
    marginTop: 15,
    borderRadius: 30,
    paddingLeft: 20,
    backgroundColor: COLORS.white,
  },
  forgotText: {
    color: COLORS.white,
    marginTop: 10,
  },
  button: {
    width: "95%",
    backgroundColor: COLORS.violet,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 15,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
  },
  errorText: {
    color: COLORS.error,
    marginTop: 5,
  },
};

export { LoginScreen };
