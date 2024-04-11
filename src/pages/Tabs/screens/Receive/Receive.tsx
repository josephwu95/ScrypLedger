import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Page, PagePadding, PageHeader } from "@components/molecules/Page";
import { HStack, Icon,Image } from '@gluestack-ui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const t = {
  receiveHeader: 'Lets Receive',
  addAmount: 'Add Amount',
};


export function Receive() {
  const qrcode = require('@assets/walletqr.png')
  return (
    <Page fullWidth>
      <PagePadding>
        <PageHeader title={t.receiveHeader} />
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>{t.receiveHeader}</Text>
          {/* QR Code placeholder */}
          <View style={styles.qrContainer}>
            <Image size='full' margin='$1' alt='1' source={qrcode}/>
            {/* You would use a QR Code component here */}
          </View>
          <HStack style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <MaterialIcons name="add" size={24} style={styles.buttonText} />
              </TouchableOpacity>
            <Text style={styles.addAmountText}>{t.addAmount}</Text>
              <TouchableOpacity style={styles.button}>
                <MaterialIcons name="remove" size={24}  style={styles.buttonText} />
              </TouchableOpacity>
          </HStack>
        </View>
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
});

export default Receive;
