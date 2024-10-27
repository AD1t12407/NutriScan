import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScanPage = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScannedData({ type, data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner 
        style={StyleSheet.absoluteFill} 
        onBarCodeScanned={scannedData ? undefined : handleBarCodeScanned}
      >
        <View style={styles.barcodeContainer}>
          {scannedData && (
            <Text style={styles.barcodeText}>
              {`Type: ${scannedData.type}\nData: ${scannedData.data}`}
            </Text>
          )}
          <Button 
            title="Tap to Scan Again" 
            onPress={() => setScannedData(null)} 
          />
        </View>
      </BarCodeScanner>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  barcodeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  barcodeText: {
    fontSize: 18,
    color: '#000',
    margin: 10,
  },
});

export default ScanPage;
