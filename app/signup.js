import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, CheckBox, Alert, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StyleVariable, FontSize, Color, Border } from "./Styles";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton } from 'react-native-paper';
import config from './config';
import auth from '@react-native-firebase/auth';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useAuthRequest } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const SignUpEmptyState = () => {
  const navigation = useNavigation();
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: 'YOUR_WEB_CLIENT_ID', // Replace with your actual web client ID from Firebase
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      // Use the id_token to authenticate with Firebase
      const credential = auth.GoogleAuthProvider.credential(id_token);
      auth().signInWithCredential(credential)
        .then(() => {
          console.log('User signed in with Google!');
          // Navigate to the next screen or perform any other action
        })
        .catch((error) => {
          console.error('Firebase authentication error:', error);
        });
    }
  }, [response]);

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

      const response = await fetch(`${config.ipAddress}/api/signup`, {
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
            <Text style={styles.signUp}>Sign Up</Text>
            <Text style={styles.pleaseSignUp}>
              Please sign up to enjoy all Expen features
            </Text>
          </View>
          <View style={styles.forms}>
            <View style={styles.wrapperFlexBox}>
              <Text style={[styles.label, styles.labelTypo]}>Name</Text>
              <TextInput
                style={[styles.placeholder, styles.input, { borderRadius: Border.radius, borderWidth: Border.width, borderColor: Color.outline }]}
                placeholder="Name"
                placeholderTextColor={styles.placeholder.color}
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.wrapperFlexBox}>
              <Text style={[styles.label, styles.labelTypo]}>Email</Text>
              <TextInput
                style={[styles.placeholder, styles.input, { borderRadius: Border.radius, borderWidth: Border.width }]}
                placeholder="Email"
                placeholderTextColor={styles.placeholder.color}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.wrapperFlexBox}>
              <Text style={[styles.label, styles.labelTypo]}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.placeholder, styles.input, { borderRadius: Border.radius, borderWidth: Border.width, borderColor: Color.outline, paddingRight: 40 }]}
                  placeholder="Password"
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
          
          <Text style={[styles.orSignUpWith, styles.dontHaveAnTypo]}>
            or Sign up with
          </Text>

          <TouchableOpacity
            disabled={!request}
            onPress={() => {
              promptAsync();
            }}
            style={[styles.GoogleBut, styles.buttonFlexBox]}
          >
            <Image source={require('../assets/images/google.svg')} style={{ width: 25, height: 25 }} />
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
          <View style={[styles.frameChild, styles.fieldFlexBox]} />
        </View>
        <View style={[styles.button2, styles.button2SpaceBlock]}>
          <View style={[styles.button3, styles.buttonFlexBox, isFormValid ? styles.buttonEnabled : styles.buttonDisabled]}>
            <Text style={[styles.button4]} onPress={() => isFormValid && handleSignUp()}>
              Sign Up
            </Text>
          </View>
          <View style={[styles.wrapper4, styles.wrapperFlexBox]}>
            <Text style={styles.dontHaveAnTypo}>Already have an account?</Text>
            <TouchableOpacity onPress={handleLogIn} style={styles.button5}>
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
    color: Color.black,
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
    borderBlockColor: Color.black,
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
  googleButtonText: {
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default SignUpEmptyState;
