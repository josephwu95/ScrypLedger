import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { HStack, Image, VStack } from '@gluestack-ui/themed'
import Animated from 'react-native-reanimated';
import { CardViewPropType } from '@src/types/cardListTypes';
import { colors, dimen, images } from '@src/resource';

/**
 * To retrieve image from the of the card
 * @param type Image type coming from card object
 * @returns Image for a type of card
 */
// const getCardImage = (type: string) => {
//   switch (type) {
//     case 'starbucks':
//       return images.starbucks;
//     case 'delta':
//       return images.delta;
//     case 'amazon':
//       return images.apple;
//     default:
//       return images.apple;
//   }
// };

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


const groupCreditCardNumber = (number: string): string | undefined => {
  // Remove any non-digit characters from the input
  const cleanedNumber = number.replace(/\D/g, '');
  
  // Split the number into groups of four digits each
  const groups = cleanedNumber.match(/.{1,4}/g);

  // Join the groups with a space in between
  const formattedNumber = groups?.join('  ');

  return formattedNumber;
};

export function GiftCard(props: CardViewPropType) {
  const { card } = props;
  const { name, logo } = card;
  const { image: cardImage, color: cardColor } = getCardAttributes(logo);
  // const formattedCardNumber = groupCreditCardNumber(cardNumber);

  return (
    <Animated.View
      sharedTransitionTag={`imageview-${card.asset_id}`}
      style={styles.container}>
      <VStack style={[styles.layerView, { backgroundColor: cardColor, opacity:1 }]}>
        {/* Apply the cardColor to the layerView's backgroundColor */}
        <HStack>
          <Image margin='$2' alt='1' source={cardImage}/>
          <View style={styles.topSection}>
            <Text style={styles.bankText}>{name}</Text>
          </View>
        </HStack>
          <HStack style={styles.middleSection}>
          <Text style={styles.cardHolderName}>Balance:</Text>
            <Text style={styles.cardHolderName}>100</Text>
          </HStack>
          {/* <View style={styles.bottomSection}>
            <Text style={styles.validity}>{validity}</Text>
          </View> */}
      </VStack>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
    borderRadius: dimen.defaultBorderRadius,
    borderWidth: 2,
    borderColor: colors.white,
    overflow: 'hidden',
  },
  title: {
    fontSize: dimen.mediumText,
    fontWeight: 'bold',
  },
  layerView: {
    flex: 1,
    width: '100%',
    opacity: 0.6,
  },
  topSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 24,
    paddingTop: 12,
  },
  middleSection: {
    justifyContent: 'flex-end',
    margin:10,
    marginTop:-20
  },
  bankText: { fontWeight: '900', fontSize: 30, color: colors.white },
  cardText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: dimen.largeText,
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  cardHolderName: { color: colors.white, fontSize: dimen.largeText },
  validity: { color: colors.white, fontSize: dimen.largeText },
});
