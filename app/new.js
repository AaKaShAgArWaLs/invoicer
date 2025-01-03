import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, CheckBox, Alert, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StyleVariable, FontSize, Color, Border } from "./Styles";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton } from 'react-native-paper';
import config from './config';
import { useRoute } from '@react-navigation/native'; 


const NewPassword = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const route = useRoute(); 
  const { user_id } = route.params;


  const isFormValid =
    password.trim() !== "" &&
    password === confirmPassword;

  const handleSignUp = async () => {
    if (!isFormValid) {
      setErrorMessage("Please fill all fields correctly.");
      return;
    }

    try {
      const dataToSubmit = {

        password,
        user_id,

      };

      const response = await fetch(`${config.ipAddress}/api/newpass`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate('login');
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleLogIn = () => {
    navigation.navigate('login');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <ScrollView>
      <View style={styles.signUpEmptyState}>
        <View style={styles.wrapper} />
        <View style={[styles.wrapper1, styles.button2SpaceBlock]}>
          <View style={styles.wrapperFlexBox}>
            <Text style={styles.signUp}>Reset Your Password</Text>
            <Text style={styles.pleaseSignUp}>
              Please enter a new password and confirm it to reset your password
            </Text>
          </View>
          <View style={styles.forms}>

            <View style={styles.wrapperFlexBox}>
              <Text style={[styles.label, styles.labelTypo]}>New Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.placeholder, styles.input, { borderRadius: Border.radius, borderWidth: Border.width, borderColor: Color.outline, paddingRight: 40 }]}
                  placeholder="Enter New Password"
                  secureTextEntry={!showPassword}
                  placeholderTextColor={styles.placeholder.color}
                  value={password}
                  onChangeText={setPassword}
                />
                <IconButton
                  icon={showPassword ? "eye-off" : "eye"}
                  onPress={togglePasswordVisibility}
                  size={24}
                  style={styles.eyeIcon}
                />
              </View>
            </View>
            <View style={styles.wrapperFlexBox}>
              <Text style={[styles.label, styles.labelTypo]}>Repeat Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[ 
                    styles.placeholder, 
                    styles.input, 
                    { 
                      borderRadius: Border.radius, 
                      borderWidth: Border.width, 
                      paddingRight: 40, 
                    }
                  ]}
                  placeholder="Repeat Password"
                  placeholderTextColor={styles.placeholder.color}
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={(text) => {
                    setConfirmPassword(text);
                    if (password && password !== text) {
                      setErrorMessage("Passwords do not match");
                    } else {
                      setErrorMessage("");
                    }
                  }}                  
                />
                <IconButton
                  icon={showConfirmPassword ? "eye-off" : "eye"}
                  onPress={toggleConfirmPasswordVisibility}
                  size={24}
                  style={styles.eyeIcon}
                />
              </View>
              {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
              ) : null}
            </View>
            
          </View>
        </View>
        <View style={styles.orSignUpWithParent}>
        </View>
        <View style={[styles.button2, styles.button2SpaceBlock]}>
          <View style={[styles.button3, styles.buttonFlexBox, isFormValid ? styles.buttonEnabled : styles.buttonDisabled]}>
            <Text style={[styles.button4]} onPress={() => isFormValid && handleSignUp()}>
              Sign Up
            </Text>
          </View>
          <View style={[styles.wrapper4, styles.wrapperFlexBox]}>
            <Text style={styles.dontHaveAnTypo}>Already have an account?</Text>
            <TouchableOpacity onPress={handleLogIn} style={styles.button5} >
              <Text style={[styles.button1, styles.buttonTypo]}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    color: Color.shadow,
    flex: 1,
    backgroundColor: Color.lightGrey,
    padding: StyleVariable.scaleAndSpacing12,
    flexDirection: "row",
    borderRadius: Border.radius,
    borderWidth: 1,
    borderColor: Color.outline,
    opacity: 0.9,
  },
  button2SpaceBlock: {
    paddingHorizontal: StyleVariable.scaleAndSpacing16,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  labelTypo: {
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
    textAlign: "left",
    borderRadius: Border.radius,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    borderWidth: 0,
  },
  buttonFlexBox: {
    borderRadius: Border.radius,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTypo: {
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
    textAlign: "left",
    fontWeight: "600",
  },
  dontHaveAnTypo: {
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
  },
  wrapperFlexBox: {
    gap: StyleVariable.scaleAndSpacing4,
    alignSelf: "stretch",
  },
  wrapper: {
    height: 75,
    justifyContent: "center",
    alignSelf: "stretch",
    borderRadius: Border.radius,
  },
  signUp: {
    fontSize: FontSize.interHeading4SemiBold_size,
    letterSpacing: -0.5,
    lineHeight: 32,
    textAlign: "left",
    fontWeight: "600",
    color: Color.primary,
    alignSelf: "stretch",
  },
  pleaseSignUp: {
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  label: {
    color: Color.monochromeBlack100,
    alignSelf: "stretch",
  },
  placeholder: {
    color: Color.onError,
    flex: 1,
    backgroundColor: Color.outline,
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
    borderWidth: 1,
    paddingHorizontal: StyleVariable.scaleAndSpacing24,
    paddingVertical: StyleVariable.scaleAndSpacing8,
    flexDirection: "row",
    gap: StyleVariable.scaleAndSpacing8,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  button3: {
    backgroundColor: Color.outlineVariant,
    paddingHorizontal: StyleVariable.scaleAndSpacing24,
    paddingVertical: StyleVariable.scaleAndSpacing8,
    flexDirection: "row",
    borderBlockColor: Color.shadow,
    gap: StyleVariable.scaleAndSpacing8,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  button5: {
    flexDirection: "row",
    justifyContent: "center",
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
  // outlineText: {
  //   color: "red",
  //   fontSize: 16,
  //   marginBottom: 15,
  //   textAlign: "center",
  // },
  buttonEnabled: {
    backgroundColor: Color.inverseSurface,
    color: Color.onPrimary,
  },
  buttonDisabled: {
    backgroundColor: Color.primary,
    color: Color.onError,
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
    color: Color.outline,
    flex: 1,
    backgroundColor: Color.backgroundBackground4,
    padding: StyleVariable.scaleAndSpacing12,
    flexDirection: "row",
  },
  buttonEnabled: {
    backgroundColor: Color.primary,
    color: Color.onPrimary,
  },
  buttonDisabled: {
    backgroundColor: Color.monochromeBlack40,
    color: Color.monochromeBlack,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    zIndex: 1,
  },
  errorText: {
    color: Color.onError,
    marginTop: 5,
  },
});

export default NewPassword;
