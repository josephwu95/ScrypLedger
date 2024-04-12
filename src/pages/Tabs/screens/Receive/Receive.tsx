import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Page, PagePadding, PageHeader } from "@components/molecules/Page";
import { HStack, Icon, Image } from '@gluestack-ui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const t = {
  receiveHeader: 'Lets Receive',
  addAmount: 'Add Amount',
};

export function Receive() {
  const qrcode = require('@assets/walletqr.png');
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleIncrement = () => setCount(prevCount => prevCount + 1);
  const handleDecrement = () => setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);

  return (
    <Page fullWidth>
      <PagePadding>
        <PageHeader title={t.receiveHeader} />
        <View style={styles.contentContainer}>
          <HStack style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                <MaterialIcons name="remove" size={24} style={styles.buttonText} />
              </TouchableOpacity>
            <Text style={styles.addAmountText}>${count}</Text>
              <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                <MaterialIcons name="add" size={24} style={styles.buttonText} />
              </TouchableOpacity>
          </HStack>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addAmountButton}>
            <Text style={styles.addAmountText}>{t.addAmount}</Text>
          </TouchableOpacity>
        </View>

        {/* Modal for QR Code */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Scan QR Code</Text>
            <Image style={styles.qrPlaceholder} source={qrcode} />
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </PagePadding>
    </Page>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  qrContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
  },
  addAmountText: {
    fontSize: 18,
    
    color:'#FFF',
    fontWeight:'bold',
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'white'
  },
  buttonContainer: {
    marginTop:40,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addAmountButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    top:330,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
  },
  qrPlaceholder: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    padding: 10,
    elevation: 2,
    borderRadius: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default Receive;
