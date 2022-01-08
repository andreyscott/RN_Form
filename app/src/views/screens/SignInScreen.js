import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, View, Text, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/color";
import STYLES from "../../styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 70 }}>
          <Text style={{ fontSize: 20, fontWeight: 650, color: COLORS.dark }}>
            Sign In to Access your Account
          </Text>
          <Text
            style={{ fontSize: 19, fontWeight: "normal", color: COLORS.light }}
          >
            Sign in to continue
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <TextInput placeholder="Email" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.btnPrimary}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Sign In
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></View>
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
                source={require("../../assests/facebook.png")}
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
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
