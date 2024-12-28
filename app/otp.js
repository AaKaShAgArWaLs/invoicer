import * as React from "react";
import { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { StyleVariable, FontSize, Color, Border } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'; 
import config from './config';

const OTPVerification = () => {
  const navigation = useNavigation();
  const route = useRoute(); 
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState('');
  const { email_id } = route.params;

  // Create an array of refs to manage OTP input fields
  const otpRefs = useRef([]);

  const handleLogin = () => {
    navigation.navigate('login'); // Navigate to the Login screen
  };

  const handleOTPVerify = async () => {
    try {
        const dataToSubmit = {
            otp: otp.join(''),
            email_id,
        };
      const response = await fetch(`${config.ipAddress}/api/otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit), // Join OTP array into a string
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate('new', { user_id: data.user_id }); // Navigate to the password reset page
      } else {
        setErrorMessage(data.message); // Set error message if response not OK
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleInputChange = (text, index) => {
    // Allow only numbers
    if (/[^0-9]/.test(text)) return; // If input is not a number, don't update

    const newOtp = [...otp];
    newOtp[index] = text; // Update the OTP array
    setOtp(newOtp);

    // Move focus to the next input if the current input is filled
    if (text.length === 1 && index < 5) {
      otpRefs.current[index + 1]?.focus(); // Focus on next input
    }
  };

  const isFormValid = otp.join('').length === 6; // OTP length validation

  return (
    <View style={styles.loginEmptyState}>
      <View style={styles.wrapper} />
      <View style={[styles.wrapper1, styles.button2SpaceBlock]}>
        <View style={styles.wrapperFlexBox}>
          <Text style={styles.login}>Forgot your password?</Text>
          <Text style={styles.pleaseLogIn}>
            Please enter the OTP sent to your email to verify your identity
          </Text>
        </View>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <View style={styles.forms}>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.label, styles.labelTypo]}>OTP</Text>
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(input) => (otpRefs.current[index] = input)} // Assign refs for OTP fields
                  style={styles.otpInput}
                  value={digit}
                  onChangeText={(text) => handleInputChange(text, index)}
                  maxLength={1} // Only allow one digit per input
                  keyboardType="numeric" // Only allow numeric keyboard
                  textAlign="center"
                />
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.orLoginWithParent}>
        <View style={[styles.frameChild, styles.fieldFlexBox]} />
      </View>
      <View style={[styles.button2, styles.button2SpaceBlock]}>
        <View style={[styles.button3, styles.buttonFlexBox, isFormValid ? styles.buttonEnabled : styles.buttonDisabled]}>
          <Text style={[styles.button4]} onPress={handleOTPVerify}>
            Verify OTP
          </Text>
        </View>
        <View style={[styles.wrapper4, styles.wrapperFlexBox]}>
          <View style={[styles.button5, styles.buttonFlexBox]}>
            <Text
              style={[styles.button1, styles.buttonTypo]}
              onPress={handleLogin} // Add navigation on press
            >
              Back to log in
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
    fontWeight: "600",
  },
  dontHaveAnTypo: {
    textAlign: "center",
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
  },
  buttonDisabled: {
    backgroundColor: Color.outlineVariant,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '60%',
  },
  otpInput: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.outline,
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
  }
});

export default OTPVerification;
