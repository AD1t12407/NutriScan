// Onboarding3.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Onboarding3 = ({ navigation }) => {
  
  const handleNext = () => {
    navigation.navigate('NewAccount'); // Navigate to Login Screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Onboarding Step 3</Text>
      <Text style={styles.description}>
        Description for step 3.
      </Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
  

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default Onboarding3;
