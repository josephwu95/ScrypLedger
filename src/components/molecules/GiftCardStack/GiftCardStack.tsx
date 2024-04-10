import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Card, CardRenderItemParams } from '@src/types/cardListTypes';
import { Pressable, StyleSheet, Text } from 'react-native';
import { GiftCard } from '@components/atoms/GiftCard';
import { colors } from '@src/resource';

/**
 * To calculate vertical translation for the view
 * @param index Index of the current card
 * @param scrollOffset Current scroll view offset
 * @param stepOffset Minimum requred vertical offset
 * @returns New vertical translation value
 */
const calculateTranslateY = (
  index: number,
  scrollOffset: number,
  stepOffset = 60,
) => {
  'worklet';
  const initialOffset = index * stepOffset;
  let translateY = initialOffset;
  if (scrollOffset > 0) {
    translateY = translateY - scrollOffset > 0 ? translateY - scrollOffset : 0;
  } else {
    const newTranslateY = initialOffset - scrollOffset * index;
    const verticalLimit = initialOffset * 1.8;
    translateY = newTranslateY < verticalLimit ? newTranslateY : verticalLimit;
  }

  return translateY;
};

export function GiftCardStackRenderItem ({
  data,
  sharedValue,
  onPress,
}: {
  data: CardRenderItemParams;
  sharedValue: Animated.SharedValue<number>;
  onPress: any;
}) {
  const { index, item } = data;

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = calculateTranslateY(index, sharedValue.value);
    return {
      transform: [
        {
          translateY: translateY,
        },
      ],
    };
  }, []);
  return (
    <Animated.View style={[styles.flatListItem, animatedStyle]}>
      <Pressable onPress={() => onPress(item)}>
        <GiftCard card={item} />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flatListItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
});