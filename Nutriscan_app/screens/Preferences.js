// Preferences.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Preferences = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferences</Text>
      <Text>Set your preferences here.</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('HomePage')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Preferences;
