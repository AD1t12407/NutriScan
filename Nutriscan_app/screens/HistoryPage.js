// HistoryPage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const HistoryPage = () => {
  const [nutritionData, setNutritionData] = useState(null);

  const fetchNutritionData = async () => {
    try {
      const response = await fetch(
        'https://world.openfoodfacts.org/api/v0/product/5449000022503.json'
      );
      const data = await response.json();
      if (data.product) {
        setNutritionData(data.product);
      } else {
        Alert.alert('Error', 'Nutritional data not found');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch nutritional data');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={fetchNutritionData}>
        <Text style={styles.cardTitle}>Coca-Cola</Text>
      </TouchableOpacity>

      {nutritionData && (
        <View style={styles.nutritionInfo}>
          <Text style={styles.infoTitle}>Nutritional Information:</Text>
          <Text>Energy: {nutritionData.nutriments?.energy} kJ</Text>
          <Text>Fat: {nutritionData.nutriments?.fat} g</Text>
          <Text>Saturated Fat: {nutritionData.nutriments?.saturatedFat} g</Text>
          <Text>Carbohydrates: {nutritionData.nutriments?.carbohydrates} g</Text>
          <Text>Sugars: {nutritionData.nutriments?.sugars} g</Text>
          <Text>Proteins: {nutritionData.nutriments?.proteins} g</Text>
          <Text>Salt: {nutritionData.nutriments?.salt} g</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  nutritionInfo: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HistoryPage;
