import * as React from "react";
import { useState } from "react";
import { useRoute } from '@react-navigation/native';  // Correct import
import { StyleSheet, View, Text, TextInput, TouchableOpacity, CheckBox, Alert, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StyleVariable, FontFamily, FontSize, Color, Border } from "./Styles";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton } from 'react-native-paper';
import config from './config';

const DataEntry = () => {
  const navigation = useNavigation();
  const route = useRoute(); 
  const [isGSTRegistered, setIsGSTRegistered] = useState(false);
  const [gstNo, setGstNo] = useState("");
  const [traderName, setTraderName] = useState("");
  const [address, setAddress] = useState("");
  const [pan, setPan] = useState("");
  const [entityType, setEntityType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user_id } = route.params;

  const isFormValid =
    address.trim() !== "" &&
    traderName.trim() !== "" &&
    pan.trim() !== "" &&
    entityType.trim() !== "" ;

    const handleSignUp = async () => {
      if (!isFormValid) {
        setErrorMessage("Please fill all fields correctly.");
        return;
      }
    
      try {
        const dataToSubmit = {
          gstRegistered: isGSTRegistered,
          gstNo,
          traderName,
          address,
          pan,
          entityType,
          user_id,
        };
    
        const response = await fetch(`${config.ipAddress}/api/data`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSubmit),
        });
    
        const data = await response.json();
    
        if (response.ok) {
          if (data.message === 'Login Successful! Move to data') {
            // Navigate to the Home page or 'data' page after successful sign-up
            navigation.navigate('Home'); // Update this to the name of your Home screen in your navigation setup
          } else {
            setErrorMessage(data.message);
          }
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("An error occurred. Please try again.");
      }
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
                
                {errorMessage ? (
                  <Text style={styles.errorText}>{errorMessage}</Text>
                ) : null}
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isGSTRegistered}
                  onValueChange={setIsGSTRegistered}
                  style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>GST Registered</Text>
              </View>
              {isGSTRegistered && (
                <View style={styles.wrapperFlexBox}>
                  <Text style={[styles.label, styles.labelTypo]}>GST No</Text>
                  <TextInput
                    style={[styles.placeholder, styles.input, { borderRadius: Border.radius, borderWidth: Border.width, borderColor: Color.outline }]}
                    placeholder="Enter GST No"
                    value={gstNo}
                    onChangeText={setGstNo}
                  />
                </View>
              )}
              <View style={styles.wrapperFlexBox}>
                <Text style={[styles.label, styles.labelTypo]}>Trader Name</Text>
                <TextInput
                  style={[styles.placeholder, styles.input, { borderRadius: Border.radius, borderWidth: Border.width, borderColor: Color.outline }]}
                  placeholder="Enter Trader Name"
                  placeholderTextColor={styles.placeholder.color}
                  value={traderName}
                  onChangeText={setTraderName}
                />
              </View>
              <View style={styles.wrapperFlexBox}>
                <Text style={[styles.label, styles.labelTypo]}>Address</Text>
                <TextInput
                  style={[styles.placeholder, styles.input, { borderRadius: Border.radius, borderWidth: Border.width, borderColor: Color.outline }]}
                  placeholder="Enter Address"
                  placeholderTextColor={styles.placeholder.color}
                  value={address}
                  onChangeText={setAddress}
                />
              </View>
              <View style={styles.wrapperFlexBox}>
                <Text style={[styles.label, styles.labelTypo]}>PAN</Text>
                <TextInput
                  style={[styles.placeholder, styles.input, { borderRadius: Border.radius, borderWidth: Border.width, borderColor: Color.outline }]}
                  placeholder="Enter PAN"
                  placeholderTextColor={styles.placeholder.color}
                  value={pan}
                  onChangeText={setPan}
                />
              </View>
              <View style={styles.wrapperFlexBox}>
                <Text style={[styles.label, styles.labelTypo]}>Entity Type</Text>
                <TextInput
                  style={[styles.placeholder, styles.input, { borderRadius: Border.radius, borderWidth: Border.width, borderColor: Color.outline }]}
                  placeholder="Enter Entity Type"
                  placeholderTextColor={styles.placeholder.color}
                  value={entityType}
                  onChangeText={setEntityType}
                />
              </View>
            </View>
          </View>
          <View style={styles.orSignUpWithParent}>
            
          </View>
          <View style={[styles.button2, styles.button2SpaceBlock]}>
            <View style={[styles.button3, styles.buttonFlexBox, isFormValid ? styles.buttonEnabled : styles.buttonDisabled]}>
              <Text style={[styles.button4]} onPress={() => isFormValid && handleSignUp()}>
                Submit
              </Text>
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
  
  export default DataEntry;
