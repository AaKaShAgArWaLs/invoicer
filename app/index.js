import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { FontFamily, StyleVariable, FontSize, Gap, Color, Border } from "./Styles";
import { IconButton, MD2Colors } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

const HomeFilledState = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('This month');
  const [items, setItems] = useState([
    { label: 'This month', value: 'This month' },
    { label: 'Last 3 months', value: 'Last 3 months' },
    { label: 'Last year', value: 'Last year' },
  ]);

  const [notifications, setNotifications] = React.useState(0);
  const [profile, setProfile] = React.useState({
    name: 'User',
    avatar: null
  });
  const [home, setHome] = React.useState({
    selected: true
  });
  const [customer, setCustomer] = React.useState({
    selected: false
  });
  const [showFilters, setShowFilters] = useState(false);

  return (
    <View style={styles.homeFilledState}>
     <View style={[styles.header, { height: 220, width: "100%" }]}>
        <View style={[styles.wrapper1,{ marginLeft: StyleVariable.scaleAndSpacing16 },]}>
          <Text style={styles.headerTitle}>Expen</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <Ionicons name="notifications-outline"size={30} color="#ffffff" />
            </TouchableOpacity>
            <IconButton icon="account-circle" size={40} iconColor="#FFFFFF" />
          </View>
        </View>
        <View style={styles.wrapper2}>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Text style={styles.walletTitle}>Main Wallet</Text>
          <Ionicons name="chevron-down-outline" size={18} color={Color.onPrimary} style={{marginLeft: 14}}/>
          </View>
          <Text style={styles.walletAmount}>IDR 0</Text>
        </View>
     </View>
     <View style={[styles.container , { zIndex: 3000 }]}>
      <Text style={styles.label}>Summary</Text>
      <DropDownPicker 
        open={open} 
        value={value} 
        items={items} 
        setOpen={setOpen} 
        setValue={setValue} 
        setItems={setItems}
        style={[styles.dropdown, { 
          width: 120,
          borderWidth: 0,
          backgroundColor: Color.background,
          opacity: 1,
          margin: 0,
          padding: 0,
        }]}
        containerStyle={[styles.dropdownContainer, {
          width: 150,
          borderWidth: 0,
          opacity: 1,
        }]}
        textStyle={[styles.textStyle, { color: '#000000' }]}
        arrowStyle={[styles.arrowStyle, { color: '#000000' }]}
        dropDownContainerStyle={{
          borderWidth: 1,
          borderColor: Color.outlineVariant,
          borderRadius: 8,
          opacity: 1,
        }}
      />
     </View>
     <ScrollView style={styles.cardsContainer}>
        <View style={styles.cardRow}>
          <TouchableOpacity style={[styles.card, styles.cardGreen]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.cardAmount}>₹ 0</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={[styles.cardLabel, { color: Color.green }]}>To Collect</Text>
                  <Ionicons name="arrow-down-outline" size={16} color={Color.green} style={{ marginLeft: 4 }} />
                </View>
              </View>
              <Ionicons name="chevron-forward-outline" size={20} color={Color.Gray} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.cardRed]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.cardAmount}>₹ 0</Text>
                <View style={{ flexDirection: 'row', alignItems:'center' }}>
                  <Text style={[styles.cardLabel, { color: Color.onError }]}>To Pay</Text>
                  <Ionicons name="arrow-up-outline" size={16} color={Color.onError} style={{ marginLeft: 4}} />
                </View>
              </View>
              <Ionicons name="chevron-forward-outline" size={20} color={Color.Gray} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.cardTitle}>Stock Value</Text>
                <Text style={styles.cardDescription}>Value of Items</Text>
              </View>
              <Ionicons name="chevron-forward-outline" size={20} color={Color.Gray} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.cardAmount}>₹ 0</Text>
                <Text style={styles.cardDescription}>This week's sale</Text>
              </View>
              <Ionicons name="chevron-forward-outline" size={20} color={Color.Gray} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.cardTitle}>Total Balance</Text>
                <Text style={styles.cardDescription}>Cash + Bank Balance</Text>
              </View>
              <Ionicons name="chevron-forward-outline" size={20} color={Color.Gray} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.cardTitle}>Reports</Text>
                <Text style={styles.cardDescription}>Sales, Party, GST...</Text>
              </View>
              <Ionicons name="chevron-forward-outline" size={20} color={Color.Gray} />
            </View>
          </TouchableOpacity>
        </View>
     </ScrollView>
     <View style={styles.recentTransactionContainer}>
        <Text style={styles.recentTransactionTitle}>Recent Transaction</Text>
        <Text style={styles.noTransactionText}>
          No recent transaction for now
        </Text>
     </View>
     <View style={styles.navBar}>
        <View style={styles.navBarButton}>
          <IconButton icon="home" size={24} color="#486cdd" />
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
        <IconButton icon="plus" iconColor="#ffffff" size={22} />
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeFilledState: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
    height: 150,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: Color.primary,
    borderBottomLeftRadius: Border.radius,
    borderBottomRightRadius: Border.radius,
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  }, 
  wrapper1: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "10px",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: FontSize.interHeading4SemiBold_size,
    fontWeight: "bold",
    alignItems: "center",
  },
  wrapper2:{
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },

  walletTitle: {
    color: "#FFFFFF",
    fontSize: FontSize.interHeading4SemiBold_size,
    fontWeight: "bold",
  },
  walletAmount: {
    color: "#FFFFFF",
    fontSize: FontSize.interHeading4SemiBold_size,
  },
  cardsContainer: {
    width: "100%",
    height: "100%",
    padding:0,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#ffffff", 
    borderRadius: Border.radius,
    padding: 16,
    flex: 1,
    width: "50%",
    margin: 4,
    display: "flex",
    flexDirection: "column",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardGreen:{
    backgroundColor: "rgba(36, 255, 113, 0.1)",
    borderColor: "rgba(36, 255, 113, 0.5)",
    shadowColor: "rgba(36, 255, 113, 1)",
    borderWidth: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardRed:{
    backgroundColor: "rgba(186, 26, 26, 0.1)",
    borderColor: "rgba(255, 78, 33, 0.4)",
    shadowColor: "rgba(186, 26, 26, 1)",
    color:Color.onErrorContainer,
    borderWidth: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardLabel: {
    fontSize: 16,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#757575',
  },
  recentTransactionContainer: {
    width: "100%",
    padding: 16,
    paddingTop: 10,
    paddingBottom: 0,
    height: 150,
    backgroundColor: "#F5F5F5",
    bottom: 50,
  },
  recentTransactionTitle: {
    fontWeight: "bold",
    marginBottom: 18,
  },
  noTransactionText: {
    color: "#888",
    marginBottom: 16,
    textAlign: 'center',
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
  container: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Vertically align items
    justifyContent: 'space-between', // Ensure proper spacing
    padding: 10,
    paddingTop:0,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 16,
  },
  dropdown: {
    flex: 1,
    height: 40,
    width: 150,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    width: 150,
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 16,
    color: '#333',
  },
  arrowStyle: {
    marginRight: 10,
  },
});
export default HomeFilledState;
