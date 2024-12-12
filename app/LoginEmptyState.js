import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import { StyleVariable, FontFamily, FontSize, Color } from './GlobalStyles';


const LoginEmptyState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.loginEmptyState}>
      <View style={styles.wrapper} />
      <View style={[styles.wrapper1, styles.button2SpaceBlock]}>
        <View style={styles.wrapperFlexBox}>
          <Text style={styles.login}>Login</Text>
          <Text style={styles.pleaseLogIn}>
            Please log in to enjoy all Montrack features
          </Text>
        </View>
        <View style={styles.forms}>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.label, styles.labelTypo]}>Email</Text>
            <View style={[styles.field, styles.fieldFlexBox]}>
              <TextInput
                style={[styles.placeholder, styles.labelTypo]}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View style={styles.wrapperFlexBox}>
            <View style={styles.wrapperFlexBox}>
              <Text style={[styles.label, styles.labelTypo]}>Password</Text>
              <View style={[styles.field, styles.fieldFlexBox]}>
                <TextInput
                  style={[styles.placeholder, styles.labelTypo]}
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
            </View>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={[styles.button1, styles.buttonTypo]} onPress={handleLogin}>
                Login
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.orLoginWithParent}>
        <Text style={[styles.orLoginWith, styles.dontHaveAnTypo]}>
          or Login with
        </Text>
        <View style={[styles.frameChild, styles.fieldFlexBox]} />
      </View>
      <View style={[styles.button2, styles.button2SpaceBlock]}>
        <View style={[styles.button3, styles.buttonFlexBox]}>
          <Text style={[styles.button4, styles.buttonTypo]}>Login</Text>
        </View>
        <View style={[styles.wrapper4, styles.wrapperFlexBox]}>
          <Text style={styles.dontHaveAnTypo}>Don’t have an account?</Text>
          <View style={[styles.button5, styles.buttonFlexBox]}>
            <Text style={[styles.button1, styles.buttonTypo]}>Sign Up</Text>
          </View>
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button2SpaceBlock: {
    paddingHorizontal: StyleVariable.scaleAndSpacing16,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  labelTypo: {
    fontFamily: FontFamily.interBody1Regular,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
    textAlign: "left",
  },
  fieldFlexBox: {
    height: 48,
    borderRadius: StyleVariable.scaleAndSpacing8,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonFlexBox: {
    borderRadius: StyleVariable.scaleAndSpacing8,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTypo: {
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
    textAlign: "left",
    fontFamily: FontFamily.interBody1SemiBold,
    fontWeight: "600",
  },
  dontHaveAnTypo: {
    textAlign: "center",
    color: Color.monochromeBlack80,
    fontFamily: FontFamily.interBody1Regular,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
  },
  wrapperFlexBox: {
    gap: StyleVariable.scaleAndSpacing8,
    alignSelf: "stretch",
  },
  wrapper: {
    height: 75,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  login: {
    fontSize: FontSize.interHeading4SemiBold_size,
    letterSpacing: -0.5,
    lineHeight: 32,
    textAlign: "left",
    fontFamily: FontFamily.interBody1SemiBold,
    fontWeight: "600",
    color: Color.monochromeBlack100,
    alignSelf: "stretch",
  },
  pleaseLogIn: {
    color: Color.monochromeBlack80,
    fontFamily: FontFamily.interBody1Regular,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  label: {
    color: Color.monochromeBlack100,
    fontFamily: FontFamily.interBody1Regular,
    alignSelf: "stretch",
  },
  placeholder: {
    color: Color.monochromeBlack60,
    flex: 1,
  },
  field: {
    backgroundColor: Color.backgroundBackground4,
    padding: StyleVariable.scaleAndSpacing12,
    flexDirection: "row",
  },
  icons: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  icon: {
    paddingHorizontal: StyleVariable.scaleAndSpacing8,
    display: "none",
    flexDirection: "row",
    paddingVertical: 0,
    alignItems: "center",
  },
  button1: {
    color: Color.primaryColorsPrimary1,
  },
  button: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.monochromeWhite,
  },
  forms: {
    gap: StyleVariable.scaleAndSpacing24,
    alignSelf: "stretch",
  },
  wrapper1: {
    gap: StyleVariable.scaleAndSpacing32,
    paddingVertical: 0,
  },
  orLoginWith: {
    alignSelf: "stretch",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.monochromeBlack40,
    borderWidth: 1,
    backgroundColor: Color.monochromeWhite,
  },
  orLoginWithParent: {
    padding: StyleVariable.scaleAndSpacing16,
    gap: StyleVariable.scaleAndSpacing16,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  button4: {
    color: Color.monochromeWhite,
  },
  button3: {
    backgroundColor: Color.monochromeBlack40,
    paddingHorizontal: StyleVariable.scaleAndSpacing24,
    paddingVertical: StyleVariable.scaleAndSpacing8,
    flexDirection: "row",
    gap: StyleVariable.scaleAndSpacing8,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  button5: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Color.monochromeWhite,
  },
  wrapper4: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button2: {
    gap: StyleVariable.scaleAndSpacing12,
    paddingVertical: 0,
    alignItems: "center",
  },
  homeIndicator1: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    width: 375,
    height: 34,
  },
  loginEmptyState: {
    width: "100%",
    height: 812,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.monochromeWhite,
  },
});

export default LoginEmptyState;