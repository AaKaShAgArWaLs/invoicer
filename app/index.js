import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { StyleVariable, FontFamily, FontSize, Color } from "./Styles";

const SignUpEmptyState = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Check if all fields are filled in correctly
  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    password === confirmPassword;

  const handleSignUp = async () => {
    if (!isFormValid) {
      setErrorMessage("Please fill all fields correctly.");
      return;
    }

    try {
      const response = await fetch("http://192.168.187.188:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Navigate to the login page or home
      } else {
        setErrorMessage(data.message); // Set error message if response not OK
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <View style={styles.signUpEmptyState}>
      <View style={styles.wrapper} />
      <View style={[styles.wrapper1, styles.button2SpaceBlock]}>
        <View style={styles.wrapperFlexBox}>
          <Text style={styles.signUp}>Sign Up</Text>
          <Text style={styles.pleaseSignUp}>
            Please sign up to enjoy all Montrack features
          </Text>
        </View>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <View style={styles.forms}>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.label, styles.labelTypo]}>Name</Text>
            <View style={[styles.field, styles.fieldFlexBox]}>
              <TextInput
                style={[styles.placeholder, styles.labelTypo, { borderColor: 'transparent' }]}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.label, styles.labelTypo]}>Email</Text>
            <View style={[styles.field, styles.fieldFlexBox]}>
              <TextInput
                style={[styles.placeholder, styles.labelTypo, { borderColor: 'transparent' }]}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
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
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.label, styles.labelTypo]}>Repeat Password</Text>
            <View style={[styles.field, styles.fieldFlexBox]}>
              <TextInput
                style={[styles.placeholder, styles.labelTypo]}
                placeholder="Repeat Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.orSignUpWithParent}>
        <View style={[styles.GoogleBut, styles.buttonFlexBox]}>
          <img src="assets/images/google.svg" style={{ width: 25, height: 25 }} />
        </View>
        <Text style={[styles.orSignUpWith, styles.dontHaveAnTypo]}>
          or Sign up with
        </Text>
        <View style={[styles.frameChild, styles.fieldFlexBox]} />
      </View>
      <View style={[styles.button2, styles.button2SpaceBlock]}>
        <View style={[
          styles.button3,
          styles.buttonFlexBox,
          isFormValid ? styles.buttonEnabled : styles.buttonDisabled
        ]}>
          <Text style={[styles.button4]} onPress={handleSignUp}>
            Sign Up
          </Text>
        </View>
        <View style={[styles.wrapper4, styles.wrapperFlexBox]}>
          <Text style={styles.dontHaveAnTypo}>Already have an account?</Text>
          <View style={[styles.button5, styles.buttonFlexBox]}>
            <Text style={[styles.button1, styles.buttonTypo]}>Log In</Text>
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
  // Reusing styles from login
  button2SpaceBlock: {
    paddingHorizontal: StyleVariable.scaleAndSpacing16,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  labelTypo: {
    fontFamily: FontFamily.newFontFamily,
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
    alignItems: "center",
  },
  buttonTypo: {
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
    textAlign: "left",
    fontFamily: FontFamily.newFontFamily,
    fontWeight: "600",
  },
  dontHaveAnTypo: {
    textAlign: "center",
    fontFamily: FontFamily.newFontFamily,
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
  signUp: {
    fontSize: FontSize.interHeading4SemiBold_size,
    letterSpacing: -0.5,
    lineHeight: 32,
    textAlign: "left",
    fontFamily: FontFamily.newFontFamily,
    fontWeight: "600",
    color: Color.monochromeBlack100,
    alignSelf: "stretch",
  },
  pleaseSignUp: {
    color: Color.monochromeBlack80,
    fontFamily: FontFamily.newFontFamily,
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
    backgroundColor: Color.backgroundBackground4,
    padding: StyleVariable.scaleAndSpacing12,
    flexDirection: "row",
  },
  button1: {
    color: "#007bff",
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
  orSignUpWith: {
    alignSelf: "stretch",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.monochromeBlack40,
    borderWidth: 1,
    backgroundColor: Color.monochromeWhite,
  },
  orSignUpWithParent: {
    padding: StyleVariable.scaleAndSpacing16,
    gap: StyleVariable.scaleAndSpacing16,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  button4: {
    color: "#fff",
  },
  GoogleBut: {
    backgroundColor: Color.monochromeWhite,
    borderColor: Color.monochromeBlack100,
    borderWidth: 1,
    paddingHorizontal: StyleVariable.scaleAndSpacing24,
    paddingVertical: StyleVariable.scaleAndSpacing8,
    flexDirection: "row",
    gap: StyleVariable.scaleAndSpacing8,
    alignSelf: "stretch",
    justifyContent: "center",
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
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
  buttonEnabled: {
    backgroundColor: Color.primaryColorsPrimary1,
    color: Color.monochromeWhite,
  },
  buttonDisabled: {
    backgroundColor: Color.monochromeBlack40,
    color: Color.monochromeBlack,
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
