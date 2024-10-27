// screens/Onboarding1.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Onboarding1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <Text style={styles.title}>Discover Healthier Choices</Text>
      <Text style={styles.text}>Easily compare food products and make healthier choices using NutriScan's real-time analysis.</Text>
      <Button title="Next" onPress={() => navigation.navigate('Onboarding2')} color={colors.secondary} />
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
