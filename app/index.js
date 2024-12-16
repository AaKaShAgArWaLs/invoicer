import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StyleVariable, Color, FontFamily, FontSize } from "./Styles";

const SignUpEmptyState = () => {
  return (
    <View style={styles.signUpEmptyState}>
      <View style={styles.wrapper} />
      <View style={[styles.wrapper1, styles.button1SpaceBlock]}>
        <View style={styles.wrapperFlexBox}>
          <Text style={[styles.signUp, styles.signFlexBox]}>Sign Up</Text>
          <Text style={[styles.pleaseSignUp, styles.pleaseSignUpTypo]}>
            Please sign up to enjoy all Montrack features
          </Text>
        </View>
        <View style={styles.forms}>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.label, styles.labelTypo]}>Name</Text>
            <View style={[styles.field, styles.buttonFlexBox]}>
              <Text style={[styles.placeholder, styles.labelTypo]}>Name</Text>
            </View>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.label, styles.labelTypo]}>Email</Text>
            <View style={[styles.field, styles.fieldFlexBox]}>
              <TextInput
                style={[styles.placeholder, styles.labelTypo ,{borderColor: 'transparent'}]}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.label, styles.labelTypo]}>Password</Text>
            <View style={[styles.field, styles.buttonFlexBox]}>
              <Text style={[styles.placeholder, styles.labelTypo]}>
                Password
              </Text>
            </View>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.label, styles.labelTypo]}>
              Repeat Password
            </Text>
            <View style={[styles.field, styles.buttonFlexBox]}>
              <Text style={[styles.placeholder, styles.labelTypo]}>
                Repeat Password
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <View style={[styles.button1, styles.button1SpaceBlock]}>
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Text style={[styles.button3, styles.buttonTypo]}>Sing Up</Text>
            
          </View>
        </View>
        <View style={[styles.wrapper3, styles.wrapperFlexBox]}>
          <Text style={[styles.alreadyHaveAn, styles.pleaseSignUpTypo]}>
            Already have an account?
          </Text>
          <View style={[styles.button4, styles.buttonFlexBox]}>
            <Text style={[styles.button5, styles.buttonTypo]}>Log In</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button1SpaceBlock: {
    paddingHorizontal: StyleVariable.scaleAndSpacing16,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  signFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  pleaseSignUpTypo: {
    color: Color.monochromeBlack80,
    fontFamily: FontFamily.interBody1Regular,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
  },
  labelTypo: {
    fontFamily: FontFamily.interBody1Regular,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
    textAlign: "left",
    borderRadius: StyleVariable.scaleAndSpacing8,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    borderWidth: 0,
  },
  buttonFlexBox: {
    borderRadius: StyleVariable.scaleAndSpacing8,
    flexDirection: "row",
    justifyContent: "center",
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
  wrapperFlexBox: {
    gap: StyleVariable.scaleAndSpacing8,
    fontFamily: FontFamily.newFontFamily,
    alignSelf: "stretch",
  },
  wrapper: {
    height: 75,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  signUp: {
    fontSize: FontSize.interHeading4SemiBold_size,
    letterSpacing: -0.5,
    lineHeight: 32,
    color: Color.monochromeBlack100,
    fontFamily: FontFamily.interBody1SemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  pleaseSignUp: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  label: {
    color: Color.monochromeBlack100,
    fontFamily: FontFamily.newFontFamily,
    alignSelf: "stretch",
  },
  placeholder: {
    color: Color.monochromeBlack60,
    flex: 1,
  },
  field: {
    backgroundColor: Color.backgroundBackground4,
    height: 48,
    padding: StyleVariable.scaleAndSpacing12,
    flexDirection: "row",
    alignSelf: "stretch",
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
  forms: {
    gap: StyleVariable.scaleAndSpacing24,
    alignSelf: "stretch",
  },
  wrapper1: {
    gap: StyleVariable.scaleAndSpacing32,
    paddingVertical: 0,
    flex: 1,
  },
  button3: {
    color: Color.monochromeWhite,
  },
  button2: {
    backgroundColor: Color.monochromeBlack40,
    paddingHorizontal: StyleVariable.scaleAndSpacing24,
    paddingVertical: StyleVariable.scaleAndSpacing8,
    flexDirection: "row",
    gap: StyleVariable.scaleAndSpacing8,
    alignSelf: "stretch",
  },
  button1: {
    paddingVertical: 0,
    alignItems: "center",
  },
  alreadyHaveAn: {
    textAlign: "center",
  },
  button5: {
    color: Color.primaryColorsPrimary1,
  },
  button4: {
    flexDirection: "row",
    backgroundColor: Color.monochromeWhite,
  },
  wrapper3: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    gap: StyleVariable.scaleAndSpacing12,
    alignSelf: "stretch",
    alignItems: "center",
  },
  signUpEmptyState: {
    width: "100%",
    height: 812,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.monochromeWhite,
  },
});

export default SignUpEmptyState;