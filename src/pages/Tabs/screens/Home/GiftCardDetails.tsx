import React from 'react'
import { colors, dimen, images, strings } from '@src/resource';
import { GiftCard } from '@components/atoms/GiftCard';
// import { Center, View } from '@gluestack-ui/themed';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TransactionItem } from '@components/atoms/TransactionItem/TransactionItem';
import { Page } from '@components/molecules/Page';
import { Image } from '@gluestack-ui/themed';

const getCardAttributes = (type: string) => {
  switch (type) {
    case 'starbucks':
      return { image: images.starbucks, color: '#1E3932' }; // Starbucks brand color
    case 'shellGas':
      return { image: images.shellGas, color: '#FFCC00' }; // Delta brand color
    case 'apple':
      return { image: images.apple, color: '#A2AAAD' }; // Apple brand color
    default:
      return { image: images.default, color: '#FFFFFF' }; // Default color
  }
};

export function GiftCardDetails ({navigation, route}) {
  const { data } = route.params
  const { image: cardImage, color: cardColor } = getCardAttributes(data.logo);
  
  const renderItem = (card) => {
    return <TransactionItem data={card} />;
  };

  return (
      <Page fullWidth>
      <ScrollView bounces={false} style={styles.scrollContainer}>
      <View style={styles.container}>
        <Image alt={data.name} source={cardImage}/>
        {/* <GiftCard card={data} /> */}
        <View style={styles.latestTextContainer}>
          <Text style={styles.latestText}>{strings.latestTransaction}</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            scrollEnabled={false}
            data={data.transactions}
            renderItem={renderItem}
          />
        </View>
      </View>
    </ScrollView>
    </Page>
  )
}

const styles = StyleSheet.create({
  scrollContainer: { paddingTop: 0 },
  container: {
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  latestTextContainer: { padding: 10, marginTop: 10 },
  latestText: {
    color: colors.black,
    fontSize: dimen.largeText,
    fontWeight: 'bold',
  },
  flatListContainer: {
    borderRadius: dimen.defaultBorderRadius,
    paddingVertical: 8,
  },
});