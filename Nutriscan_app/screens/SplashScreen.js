// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding1');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NutriScan</Text>
      <Text style={styles.subtitle}>Scan Smart, Eat Right, Live Well</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.white,
    fontSize: 18,
  },
});
