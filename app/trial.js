import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const HeaderWithDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('This month');
  const [items, setItems] = useState([
    { label: 'This month', value: 'This month' },
    { label: 'Last month', value: 'Last month' },
    { label: 'Last 3 months', value: 'Last 3 months' },
    { label: 'Last year', value: 'Last year' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.summaryText}>Summary</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdown: {
    width: 150,
    height: 40,
    backgroundColor: '#f5f5f5',
    borderColor: '#ddd',
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
});

export default HeaderWithDropdown;
