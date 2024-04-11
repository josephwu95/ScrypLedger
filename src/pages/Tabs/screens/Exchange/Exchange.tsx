import React, { useState } from 'react';
import { PagePadding, ScrollablePage, PageHeader, Page } from "@components/molecules/Page";
import { Center, Box, VStack, Text, Heading } from "@gluestack-ui/themed";
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // or import from 'react-native-vector-icons/MaterialCommunityIcons' for non-Expo
import { Picker } from '@react-native-picker/picker';
import { ImagePicker } from '@components/molecules/ImagePicker';
import { MarketRates } from '@components/molecules/MarketRates';

const t = {
  exchangeHeader: 'Exchange',
  exchangeSubHeader: "Let's Exchange. Swap Giftcards",
};

export function Exchange() {
  const [selectedCardLeft, setSelectedCardLeft] = useState('starbucks');
  const [selectedCardRight, setSelectedCardRight] = useState('apple');

  return (
    <Page fullWidth>
      <PagePadding>
        <PageHeader title={t.exchangeHeader} />
        <Center>
          <Text>{t.exchangeSubHeader}</Text>
          <View style={styles.hStack}>
          <ImagePicker/>
            <MaterialCommunityIcons name="swap-horizontal" size={24} color="black" />
            <ImagePicker/>        
          </View>
        </Center>
        <View style={{marginTop:30}}>
          <MarketRates/>
        </View>
      </PagePadding>
    </Page>
  );
}

const styles = StyleSheet.create({
  hStack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  picker: {
    width: 150,
    height: 44,
  },
});

