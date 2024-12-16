import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  FontFamily,
  StyleVariable,
  FontSize,
  Gap,
  Color,
  Border,
} from "./Styles";
import { IconButton } from "react-native-paper";

const HomeFilledState = () => {
  return (
    <View style={styles.homeFilledState}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Montrack</Text>
          <Text style={styles.walletTitle}>Main Wallet</Text>
          <Text style={styles.walletAmount}>IDR 0</Text>
          <View style={styles.headerIcons}>
            <IconButton icon="bell" size={24} color="#FFFFFF" />
            <IconButton icon="account-circle" size={24} color="#FFFFFF" />
          </View>
        </View>
        {/* <View style={[styles.wrapper, styles.wrapperFlexBox2, {alignItems: 'center'}]}>
          <View style={styles.wrapper2}>
            <View style={[styles.logo, {colors: { primary: 'green' }}]}>
              <IconButton icon="account" size={24} color="#FFFFFF" />
              <IconButton icon="account-circle" size={24} color="#FFFFFF" />
            </View>
          </View>
          <View style={[styles.iconsParent, styles.wrapperFlexBox1, {alignItems: 'center'}]}>
            <IconButton icon="star" size={24} color="#FFFFFF" />
            <IconButton icon="account-circle" size={24} color="#FFFFFF" />
          </View>
        </View>
        <View style={[styles.wrapper3, {alignItems: 'center'}]}>
          <View style={[styles.accordionButton, styles.wrapperFlexBox2, {alignItems: 'center'}]}>
            <Text style={[styles.label, styles.labelTypo]}>Main Wallet</Text>
            <IconButton icon="chevron-down" size={16} color="#FFFFFF" />
          </View>
          <Text style={[styles.idr5000000, styles.idrTypo, {textAlign: 'center'}]}>IDR 0</Text>
        </View> */}
      <View style={styles.container1}>
        <View style={styles.summaryContainer}>
          <View style={styles.card}>
            <Text style={styles.emoji}>🤑</Text>
            <Text style={styles.incomeLabel}>Income</Text>
            <Text style={styles.amount}>IDR 0</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.emoji}>💸</Text>
            <Text style={styles.expenseLabel}>Expense</Text>
            <Text style={styles.amount}>IDR 0</Text>
          </View>
        </View>
        <View style={styles.pocketsGoalsContainer}>
          <View style={styles.card}>
            <Text style={styles.emoji}>👜</Text>
            <Text style={styles.pocketsLabel}>Pockets</Text>
            <Text style={styles.amount}>0 Pockets</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.emoji}>🎯</Text>
            <Text style={styles.goalsLabel}>Goals</Text>
            <Text style={styles.amount}>0 Goals</Text>
          </View>
        </View>
        <View style={styles.recentTransactionContainer}>
          <Text style={styles.recentTransactionTitle}>Recent Transaction</Text>
          <Text style={styles.noTransactionText}>No recent transaction for now</Text>
        </View>
      </View>
      <View style={styles.navBar}>
        <View style={styles.navBarButton}>
          <IconButton icon="home" size={24} />
          <Text style={styles.navBarLabel}>Home</Text>
        </View>
        <View style={styles.navBarButton}>
          <IconButton icon="chart-bar" size={24} />
          <Text style={styles.navBarLabel}>Customer</Text>
        </View>
        <View style={styles.navBarButton}>
          <IconButton icon="account" size={24} />
          <Text style={styles.navBarLabel}>Profile</Text>
        </View>
      </View>
      <View style={styles.floatingActionButton}>
        <IconButton icon="plus" size={32}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeFilledState: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  wrapper: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  walletTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  walletAmount: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  container1: {
    flex: 1,
    alignItems: "center",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  pocketsGoalsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    flex: 1,
    margin: 4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  emoji: {
    fontSize: 22,
    marginBottom: 8,
    left : -10,
  },
  incomeLabel: {
    fontWeight: "bold",
    marginTop: 8,
  },
  expenseLabel: {
    fontWeight: "bold",
    marginTop: 8,
  },
  pocketsLabel: {
    fontWeight: "bold",
    marginTop: 8,
  },
  goalsLabel: {
    fontWeight: "bold",
    marginTop: 8,
  },
  amount: {
    fontSize: 16,
    color: "#333",
  },
  recentTransactionContainer: {
    width: "100%",
    alignItems: "center",
  },
  recentTransactionTitle: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  noTransactionText: {
    color: "#888",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
  },
  navBarButton: {
    alignItems: "center",
  },
  navBarLabel: {
    fontSize: 12,
  },
  floatingActionButton: {
    position: "absolute",
    bottom: 140,
    right: 16,
    backgroundColor: "#3077e3",
    borderRadius: 52,
    padding: 5,
    elevation: 4,
    opacity: 0.8,
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    opacity: 10,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  walletTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "center",
  },
  walletAmount: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeFilledState;