import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      {/* Add your notification content here */}
      <Text>No new notifications</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default NotificationPage;
