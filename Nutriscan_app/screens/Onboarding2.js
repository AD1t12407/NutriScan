// screens/Onboarding1.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

export default function onboarding2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/onboarding2.png')} style={styles.image} />
      <Text style={styles.title}>Discover Healthier Choices</Text>
      <Text style={styles.text}>Easily scan packaged foods and instantly receive detailed nutritional information, including Nutri-Score and NOVA ratings, helping you make healthier choices with confidence.</Text>
      <Button title="Next" onPress={() => navigation.navigate('Onboarding3')} color={colors.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: colors.textPrimary,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
});
