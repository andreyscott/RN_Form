import "react-native-gesture-handler";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/color";
import STYLES from "../../styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: "black" }}
    >
      <ImageBackground
        source={require("../../../../assets/cover.jpg")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}
              style={{ marginLeft: 0 }}
            >
              <Icon name="arrow-back" size={30} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 70 }}>
            <Text
              style={{ fontSize: 22, fontWeight: 650, color: COLORS.white }}
            >
              Create an account
            </Text>
            <Text
              style={{
                fontSize: 19,
                fontWeight: "normal",
                color: COLORS.light,
              }}
            >
              Fill the details & create your account
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={STYLES.inputContainer}>
              <TextInput placeholder="Username/Email ID" style={STYLES.input} />
            </View>
            <View style={STYLES.inputContainer}>
              <TextInput placeholder="Password" style={STYLES.input} />
            </View>
            <View style={STYLES.inputContainer}>
              <TextInput
                placeholder="Confirm Password"
                style={STYLES.input}
                secureTextEntry
              />
            </View>
            <View style={STYLES.btnPrimary}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 18 }}
              >
                Continue
              </Text>
            </View>
            <View
              style={{
                marginVertical: 20,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ marginHorizontal: 5, fontWeight: "bold" }}>
                or sign in with
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={STYLES.btnSecondary}>
                <Image
                  style={STYLES.btnImage}
                  source={require("../../../../assets/face.png")}
                />
              </View>
              <View style={STYLES.btnSecondary}>
                <Image
                  style={STYLES.btnImage}
                  source={require("../../assests/google.png")}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "center",
              marginTop: 40,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: COLORS.light, fontWeight: "bold" }}>
              Already have an account ?
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUpScreen;
