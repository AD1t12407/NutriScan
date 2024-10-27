// screens/IngredientAnalysis.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import colors from '../config/colors';

export default function IngredientAnalysis({ route }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${route.params.barcode}.json`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.product);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [route.params.barcode]);

  if (loading) {
    return <ActivityIndicator size="large" color={colors.secondary} />;
  }

  if (!data) {
    return <Text>No product found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.product_name}</Text>
      <Text style={styles.subtitle}>Nutri-Score: {data.nutriscore_grade.toUpperCase()}</Text>
      {/* Display ingredients, allergens, etc. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
  },
});
