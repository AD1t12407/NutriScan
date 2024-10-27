// SetPassword.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SetPassword = ({ navigation }) => {
  const handleSetPassword = () => {
    // Handle password setting logic here
    navigation.navigate('HomePage'); // Navigate to HomePage after setting password
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Password</Text>
      <TextInput placeholder="New Password" secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />
      <Button title="Set Password" onPress={handleSetPassword} />
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

export default SetPassword;
