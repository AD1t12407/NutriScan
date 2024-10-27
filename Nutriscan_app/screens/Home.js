// screens/Home.js
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import colors from '../config/colors';
import Footer from '../components/Footer'; 

export default function HomeScreen({ navigation }) {
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.greeting}>Good Morning</Text>
        <Text style={styles.subtitle}>Your daily healthy suggestions:</Text>

        {/* Recommendations section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Nutri-Score Suggestions</Text>
          <Text>Choose products with A or B rating for a healthier diet.</Text>
        </View>

        <Button
          title="Scan a Product"
          onPress={() => navigation.navigate('Scan')}
          color={colors.secondary}
        />
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50, // Adjusted for better spacing
    backgroundColor: colors.background,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10, // Added margin for better spacing
  },
  subtitle: {
    fontSize: 18,
    color: colors.gray,
    marginVertical: 10,
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2, // Added elevation for Android shadow
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 5,
  },
});
