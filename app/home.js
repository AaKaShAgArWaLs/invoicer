import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, CheckBox, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import the hook
import { StyleVariable, FontFamily, FontSize, Color } from "./Styles";
import { ScrollView } from "react-native-gesture-handler";

const SignUpEmptyState = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isGSTRegistered, setIsGSTRegistered] = useState(false);
  const [gstNo, setGstNo] = useState("");
  const [traderName, setTraderName] = useState("");
  const [address, setAddress] = useState("");
  const [pan, setPan] = useState("");
  const [entityType, setEntityType] = useState("");
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
      const dataToSubmit = {
        name,
        email,
        password,
        gstRegistered: isGSTRegistered,
        gstNo,
        traderName,
        address,
        pan,
        entityType,
      };

      const response = await fetch("http://192.168.187.188:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate('Login'); // Navigate to 'Login' screen after sign-up
      } else {
        setErrorMessage(data.message); // Set error message if response not OK
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleLogIn = () => {
    navigation.navigate('login'); // Navigate to the Login screen
  };

  return (
    <ScrollView>
      <View style={styles.signUpEmptyState}>
        <View style={styles.wrapper} />
        <View style={[styles.wrapper1, styles.button2SpaceBlock]}>
          <View style={styles.wrapperFlexBox}>
            <Text style={styles.signUp}>Home</Text>
            <Text style={styles.pleaseSignUp}>
              This is the home Page
            </Text>
          </View>
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>
        </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    color: Color.monochromeBlack60,
    flex: 1,
    backgroundColor: Color.backgroundBackground4,
    padding: StyleVariable.scaleAndSpacing12,
    flexDirection: "row",
    borderRadius: StyleVariable.scaleAndSpacing8, 
  },

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
    fontFamily: FontFamily.newFontFamily,
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
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#3a3f47',
  },
  placeholder: {
    color: Color.monochromeBlack60,
    flex: 1,
    backgroundColor: Color.backgroundBackground4,
    padding: StyleVariable.scaleAndSpacing12,
    flexDirection: "row",
  },
  // existing styles...
  buttonEnabled: {
    backgroundColor: Color.primaryColorsPrimary1,
    color: Color.monochromeWhite,
  },
  buttonDisabled: {
    backgroundColor: Color.monochromeBlack40,
    color: Color.monochromeBlack,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
});

export default SignUpEmptyState;
