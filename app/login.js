import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import { StyleVariable, FontFamily, FontSize, Color, Border } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

const LoginEmptyState = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('signup'); 
  };

  const handleforget = () => {
    navigation.navigate('forgot'); 
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.187.188:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        navigation.navigate('home', { user_id: data.user_id });
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Check if both email and password are filled in
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <View style={styles.loginEmptyState}>
      <View style={styles.wrapper} />
      <View style={[styles.wrapper1, styles.button2SpaceBlock]}>
        <View style={styles.wrapperFlexBox}>
          <Text style={styles.login}>Login</Text>
          <Text style={styles.pleaseLogIn}>
            Please log in to enjoy all Expen
          </Text>
        </View>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <View style={styles.forms}>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.label, styles.labelTypo]}>Email</Text>
            <View style={[styles.field, styles.fieldFlexBox]}>
              <TextInput
                style={styles.inputField}
                placeholder="Email"
                placeholderTextColor={styles.placeholder.color}
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
                  style={styles.inputField}
                  placeholder="Password"
                  placeholderTextColor={styles.placeholder.color}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <IconButton
                  icon={showPassword ? "eye-off" : "eye"}
                  onPress={togglePasswordVisibility}
                  size={24}
                  color={Color.primary}
                  style={{ position: 'absolute', right: 1 }}
                />
              </View>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text
                  style={[styles.button1, styles.buttonTypo]}
                  onPress={handleforget}
                >
                  Forgot Password?
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.orLoginWithParent}>
        <View style={[styles.GoogleBut, styles.buttonFlexBox]}>
          <Image
            source={require("../assets/images/google.svg")}style={{ width: 25, height: 25 }}/>
        </View>
        <Text style={[styles.orLoginWith, styles.dontHaveAnTypo]}>
          or Login with
        </Text>
        <View style={[styles.frameChild, styles.fieldFlexBox]} />
      </View>
      <View style={[styles.button2, styles.button2SpaceBlock]}>
        <View
          style={[
            styles.button3,
            styles.buttonFlexBox,
            isFormValid ? styles.buttonEnabled : styles.buttonDisabled,
          ]}
        >
          <Text
            style={[
              styles.button4,
              { color: isFormValid ? Color.onPrimary : Color.shadow }
            ]}
            onPress={isFormValid ? handleLogin : null}
          >
            Login
          </Text>
        </View>
        <View style={[styles.wrapper4, styles.wrapperFlexBox]}>
          <Text style={styles.dontHaveAnTypo}>Don’t have an account?</Text>
          <View style={[styles.button5, styles.buttonFlexBox]}>
            <Text
              style={[styles.button1, styles.buttonTypo]}
              onPress={handleSignUp} // Add navigation on press
            >
              Sign Up
            </Text>
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
  inputField: {
    backgroundColor: Color.lightGrey,
    flex: 1,
    borderColor: Color.outline,
    borderRadius: Border.radius,
    borderWidth: Border.width,
    padding: StyleVariable.scaleAndSpacing12,
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
    paddingHorizontal: StyleVariable.scaleAndSpacing24,
    paddingVertical: StyleVariable.scaleAndSpacing8,
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
  },
  login: {
    fontSize: FontSize.interHeading4SemiBold_size,
    letterSpacing: -0.5,
    lineHeight: 32,
    textAlign: "left",
    fontWeight: "600",
    color: Color.primary,
    alignSelf: "stretch",
  },
  pleaseLogIn: {
    color: Color.monochromeBlack80,
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
    color: Color.outline,
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
    paddingHorizontal: StyleVariable.scaleAndSpacing24,
    paddingVertical: StyleVariable.scaleAndSpacing4,
    flexDirection: "row",
    gap: StyleVariable.scaleAndSpacing4,
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
  buttonEnabled: {
    backgroundColor: Color.primary,
    color: Color.onError,
  },
  buttonDisabled: {
    backgroundColor: Color.outlineVariant,
    color: Color.shadow,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default LoginEmptyState;
