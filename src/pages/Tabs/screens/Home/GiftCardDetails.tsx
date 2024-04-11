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

export function GiftCardDetails ({navigation, route}) {
  const { data } = route.params
  
  const renderItem = (card) => {
    return <TransactionItem data={card} />;
  };

  return (
      <Page fullWidth>
      <ScrollView bounces={false} style={styles.scrollContainer}>
      <View style={styles.container}>
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