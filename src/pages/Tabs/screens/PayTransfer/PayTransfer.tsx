import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { PagePadding, ScrollablePage, PageHeader, Page } from "@components/molecules/Page";
import { BarCodeScanner } from 'expo-barcode-scanner';

const t = {
  payTransfer: 'Pay/Transfer',
};

export function PayTransfer() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
        />
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <Page>
      <PagePadding>
      <View style={styles.container}>
        <PageHeader title='Pay/Transfer'/>
        <Text style={styles.title}>Pay</Text>
        <Text style={styles.paragraph}>Scan a barcode</Text>
        {renderCamera()}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScanned(false)}
          disabled={scanned}
        >
          <Text style={styles.buttonText}>Scan QR to Start your job</Text>
        </TouchableOpacity>
      </View>
      </PagePadding>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    width: '80%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});