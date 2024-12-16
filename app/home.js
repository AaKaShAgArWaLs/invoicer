import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  FontFamily,
  StyleVariable,
  FontSize,
  Gap,
  Color,
  Border,
} from "../GlobalStyles";

const HomeFilledState = () => {
  return (
    <View style={styles.homeFilledState}>
      <View style={styles.statusBar}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
        <View style={[styles.container, styles.containerPosition]}>
          <Image
            style={[styles.batteryIcon, styles.containerPosition]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.combinedShapeIcon}
            contentFit="cover"
            source={require("../assets/combined-shape.png")}
          />
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
        </View>
      </View>
      <LinearGradient
        style={styles.wrapper}
        locations={[0, 1]}
        colors={["#3077e3", "#5a96e3"]}
      >
        <View style={[styles.wrapper1, styles.wrapperFlexBox2]}>
          <View style={styles.wrapper2}>
            <View style={styles.logo}>
              <Image
                style={styles.unionIcon}
                contentFit="cover"
                source={require("../assets/union.png")}
              />
              <Image
                style={styles.montrackIcon}
                contentFit="cover"
                source={require("../assets/montrack.png")}
              />
            </View>
          </View>
          <View style={[styles.iconsParent, styles.wrapperFlexBox1]}>
            <Image
              style={styles.icons}
              contentFit="cover"
              source={require("../assets/icons.png")}
            />
            <Image
              style={styles.avatarNotion081}
              contentFit="cover"
              source={require("../assets/avatar-notion08-1.png")}
            />
          </View>
        </View>
        <View style={styles.wrapper3}>
          <View style={[styles.accordionButton, styles.wrapperFlexBox2]}>
            <Text style={[styles.label, styles.labelTypo]}>Main Wallet</Text>
            <Image
              style={styles.icons1}
              contentFit="cover"
              source={require("../assets/icons1.png")}
            />
          </View>
          <Text style={[styles.idr5000000, styles.idrTypo]}>IDR 5.000.000</Text>
        </View>
      </LinearGradient>
      <View style={styles.container1}>
        <View style={[styles.wrapper4, styles.wrapperFlexBox]}>
          <Text style={[styles.summary, styles.incomeTypo]}>Summary</Text>
          <View style={[styles.accordionButton, styles.wrapperFlexBox2]}>
            <Text style={[styles.label1, styles.labelTypo]}>This month</Text>
            <Image
              style={styles.icons1}
              contentFit="cover"
              source={require("../assets/icons2.png")}
            />
          </View>
        </View>
        <View style={[styles.wrapper5, styles.wrapperFlexBox1]}>
          <View style={[styles.card, styles.cardBorder]}>
            <Text style={[styles.text, styles.textTypo]}>🤑</Text>
            <View style={styles.wrapper3}>
              <View style={[styles.vectorParent, styles.wrapperFlexBox2]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/polygon-1.png")}
                />
                <Text style={[styles.income, styles.incomeTypo]}>Income</Text>
              </View>
              <Text style={[styles.idrAmount, styles.incomeTypo]}>
                IDR 8.000.000
              </Text>
            </View>
          </View>
          <View style={styles.cardShadowBox}>
            <Text style={[styles.text, styles.textTypo]}>💸</Text>
            <View style={styles.wrapper3}>
              <View style={[styles.vectorParent, styles.wrapperFlexBox2]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/polygon-11.png")}
                />
                <Text style={[styles.income, styles.incomeTypo]}>Expense</Text>
              </View>
              <Text style={[styles.idrAmount, styles.incomeTypo]}>
                IDR 3.000.000
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.wrapper6, styles.wrapperFlexBox1]}>
          <View style={styles.cardShadowBox}>
            <Text style={[styles.text, styles.textTypo]}>👝</Text>
            <View style={styles.wrapper3}>
              <Text style={[styles.label2, styles.incomeTypo]}>Pockets</Text>
              <Text style={[styles.idrAmount, styles.incomeTypo]}>
                7 Pockets
              </Text>
            </View>
          </View>
          <View style={styles.cardShadowBox}>
            <Text style={[styles.text, styles.textTypo]}>📌</Text>
            <View style={styles.wrapper3}>
              <Text style={[styles.label2, styles.incomeTypo]}>Goals</Text>
              <Text style={[styles.idrAmount, styles.incomeTypo]}>
                10 Goals
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.wrapper7, styles.wrapperFlexBox]}>
          <Text style={[styles.summary, styles.incomeTypo]}>
            Recent Transaction
          </Text>
          <View style={[styles.accordionButton, styles.wrapperFlexBox2]}>
            <Text style={[styles.label1, styles.labelTypo]}>All</Text>
            <Image
              style={styles.icons1}
              contentFit="cover"
              source={require("../assets/icons3.png")}
            />
          </View>
        </View>
        <View style={[styles.card4, styles.cardLayout]}>
          <View style={styles.nasiGorengParent}>
            <Text style={[styles.nasiGoreng, styles.incomeTypo]}>
              Nasi Goreng
            </Text>
            <Text style={[styles.text4, styles.labelTypo]}>17/04/23</Text>
          </View>
          <Text style={[styles.idr40000, styles.idrTypo]}>- IDR 40.000</Text>
        </View>
        <View style={[styles.floatingActionButton, styles.wrapperFlexBox2]}>
          <Image
            style={styles.icons4}
            contentFit="cover"
            source={require("../assets/icons4.png")}
          />
        </View>
      </View>
      <View style={[styles.navBar, styles.cardBorder]}>
        <View style={styles.navBarButton}>
          <Image
            style={styles.icons}
            contentFit="cover"
            source={require("../assets/icons5.png")}
          />
          <View style={[styles.homeWrapper, styles.wrapperFlexBox2]}>
            <Text style={[styles.home, styles.idrTypo]}>Home</Text>
          </View>
        </View>
        <View style={styles.navBarButton1}>
          <Image
            style={styles.icons}
            contentFit="cover"
            source={require("../assets/icons6.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>Budgeting</Text>
        </View>
        <View style={styles.navBarButton1}>
          <Image
            style={styles.icons}
            contentFit="cover"
            source={require("../assets/icons7.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>Goals</Text>
        </View>
        <View style={styles.navBarButton1}>
          <Image
            style={styles.icons}
            contentFit="cover"
            source={require("../assets/icons8.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>Profile</Text>
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.interBody1SemiBold,
    fontWeight: "600",
  },
  containerPosition: {
    height: 12,
    top: "50%",
    position: "absolute",
  },
  wrapperFlexBox2: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapperFlexBox1: {
    gap: StyleVariable.scaleAndSpacing12,
    flexDirection: "row",
  },
  labelTypo: {
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
  },
  idrTypo: {
    fontFamily: FontFamily.interBody1Bold,
    fontWeight: "700",
  },
  wrapperFlexBox: {
    gap: Gap.gap_lg,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  incomeTypo: {
    color: Color.monochromeBlack100,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
  },
  cardBorder: {
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    lineHeight: 48,
    letterSpacing: -0.6,
    fontSize: FontSize.interHeading3SemiBold_size,
    textAlign: "left",
  },
  cardLayout: {
    borderRadius: StyleVariable.scaleAndSpacing12,
    padding: StyleVariable.scaleAndSpacing161,
    gap: StyleVariable.scaleAndSpacing41,
  },
  time: {
    top: 0,
    left: 0,
    fontSize: 15,
    letterSpacing: 0,
    lineHeight: 18,
    textAlign: "center",
    color: Color.colorWhite,
    width: 54,
    position: "absolute",
  },
  action: {
    top: 14,
    left: 20,
    height: 18,
  },
  batteryIcon: {
    marginTop: -5.75,
    right: 0,
    width: 25,
  },
  combinedShapeIcon: {
    width: 17,
    height: 11,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  container: {
    marginTop: -5.84,
    right: 15,
    width: 67,
  },
  statusBar: {
    height: 44,
    width: 375,
    backgroundColor: Color.primaryColorsPrimary1,
  },
  unionIcon: {
    width: 29,
    height: 29,
  },
  montrackIcon: {
    height: "54.08%",
    width: "71.77%",
    top: "23.07%",
    right: "0.02%",
    bottom: "22.85%",
    left: "28.21%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logo: {
    width: 130,
    height: 29,
  },
  wrapper2: {
    justifyContent: "center",
    flex: 1,
  },
  icons: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  avatarNotion081: {
    borderRadius: 72,
    width: 48,
    height: 48,
  },
  iconsParent: {
    alignItems: "center",
  },
  wrapper1: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  label: {
    fontFamily: FontFamily.interBody1Regular,
    color: Color.colorWhite,
  },
  icons1: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  accordionButton: {
    gap: StyleVariable.scaleAndSpacing41,
  },
  idr5000000: {
    lineHeight: 48,
    letterSpacing: -0.6,
    fontSize: FontSize.interHeading3SemiBold_size,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.colorWhite,
  },
  wrapper3: {
    gap: StyleVariable.scaleAndSpacing41,
    alignSelf: "stretch",
  },
  wrapper: {
    paddingHorizontal: StyleVariable.scaleAndSpacing161,
    paddingTop: StyleVariable.scaleAndSpacing12,
    paddingBottom: StyleVariable.scaleAndSpacing161,
    backgroundColor: Color.gradientGradient1,
    gap: StyleVariable.scaleAndSpacing8,
    alignSelf: "stretch",
  },
  summary: {
    fontFamily: FontFamily.interBody1SemiBold,
    fontWeight: "600",
    flex: 1,
  },
  label1: {
    color: Color.monochromeBlack80,
    fontFamily: FontFamily.interBody1Regular,
  },
  wrapper4: {
    zIndex: 0,
  },
  text: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBody1SemiBold,
    fontWeight: "600",
  },
  frameChild: {
    borderRadius: Border.br_11xs,
    width: 12,
    height: 11,
  },
  income: {
    fontFamily: FontFamily.interBody1Regular,
    flex: 1,
  },
  vectorParent: {
    gap: StyleVariable.scaleAndSpacing8,
    alignSelf: "stretch",
  },
  idrAmount: {
    fontFamily: FontFamily.interBody1Bold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  card: {
    borderWidth: 1,
    height: 120,
    borderRadius: StyleVariable.scaleAndSpacing12,
    padding: StyleVariable.scaleAndSpacing161,
    gap: StyleVariable.scaleAndSpacing41,
    shadowOpacity: 1,
    elevation: 24,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    flex: 1,
  },
  cardShadowBox: {
    height: 124,
    borderRadius: StyleVariable.scaleAndSpacing12,
    shadowOpacity: 1,
    elevation: 24,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    padding: StyleVariable.scaleAndSpacing161,
    justifyContent: "center",
    gap: StyleVariable.scaleAndSpacing8,
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  wrapper5: {
    zIndex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  label2: {
    fontFamily: FontFamily.interBody1Regular,
    alignSelf: "stretch",
  },
  wrapper6: {
    zIndex: 2,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  wrapper7: {
    zIndex: 3,
  },
  nasiGoreng: {
    alignSelf: "stretch",
    fontFamily: FontFamily.interBody1SemiBold,
    fontWeight: "600",
  },
  text4: {
    color: Color.monochromeBlack60,
    fontFamily: FontFamily.interBody1Regular,
    alignSelf: "stretch",
  },
  nasiGorengParent: {
    gap: StyleVariable.scaleAndSpacing41,
    flex: 1,
  },
  idr40000: {
    color: "#f45454",
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
  },
  card4: {
    backgroundColor: Color.backgroundBackground3,
    width: 343,
    zIndex: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  icons4: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  floatingActionButton: {
    top: 411,
    left: 295,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowRadius: 48,
    elevation: 48,
    width: 64,
    height: 64,
    zIndex: 5,
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Color.primaryColorsPrimary1,
  },
  container1: {
    gap: StyleVariable.scaleAndSpacing161,
    padding: StyleVariable.scaleAndSpacing161,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  home: {
    color: Color.primaryColorsPrimary1,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.interBody1SemiBold_size,
  },
  homeWrapper: {
    backgroundColor: Color.backgroundBackground2,
    paddingHorizontal: StyleVariable.scaleAndSpacing12,
    paddingVertical: StyleVariable.scaleAndSpacing2,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
  },
  navBarButton: {
    gap: StyleVariable.scaleAndSpacing8,
    alignItems: "center",
  },
  navBarButton1: {
    gap: StyleVariable.scaleAndSpacing4,
    alignItems: "center",
  },
  navBar: {
    borderTopWidth: 1,
    padding: StyleVariable.scaleAndSpacing16,
    gap: StyleVariable.scaleAndSpacing24,
    flexDirection: "row",
    alignItems: "center",
    width: 375,
    overflow: "hidden",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  homeIndicator: {
    height: 34,
    width: 375,
  },
  homeFilledState: {
    width: "100%",
    height: 812,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default HomeFilledState;