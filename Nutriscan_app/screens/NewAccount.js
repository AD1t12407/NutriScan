// NewAccount.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const NewAccount = ({ navigation }) => {
  const handleCreateAccount = () => {
    // Handle account creation logic here
    navigation.navigate('SetPassword'); // Navigate to SetPassword
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Account</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Full Name" style={styles.input} />
      <Button title="Create Account" onPress={handleCreateAccount} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default NewAccount;
