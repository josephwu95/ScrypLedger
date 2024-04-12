// npx expo start --dev-client
import { GiftCardStackRenderItem } from "@components/molecules/GiftCardStack";
import {
  PagePadding,
  ScrollablePage,
  PageHeader,
  Page,
} from "@components/molecules/Page";
import { Center, Box, VStack, Heading } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  Dimensions,
  ListRenderItem,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GiftCard } from "@components/atoms/GiftCard";
import Animated, {
  AnimatedStyleProp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { colors, strings } from '@src/resource';
import { SCREENS } from '@constants';
import { MODEL_NAMES } from "@constants";
import { LocalRealmContext } from "@mongodb/context";
// import i18n from "@src/i18n";

const t = {
  hello: 'Hello Marcos',
  // welcome: i18n.t('home.welcome'), example of i18 in json
};

const data = [
  
  {
    "asset_id": 1,
    "name": "Shell Gas",
    "logo": "shellGas",
    "balance": "1000",
    "transactions": [
      {
        "note": "Slack Technologies",
        "amount": "123",
        "currency": "$",
        "date": "Friday"
      },
      {
        "note": "Uber",
        "amount": "123",
        "currency": "$",
        "date": "Today"
      },
      {
        "note": "Uber",
        "amount": "123",
        "currency": "$",
        "date": "Today"
      }
    ]
  },
  {
    "id": 52,
    "name": "Apple",
    "cardHolderName": "Card Holder 2",
    "cardNumber": "12345678901234",
    "validity": "01/24",
    "logo": "apple",
    "balance": "1000",
    "transactions": [
      {
        "note": "Slack Technologies",
        "amount": "123",
        "currency": "$",
        "date": "Friday"
      },
      {
        "note": "Uber",
        "amount": "123",
        "currency": "$",
        "date": "Today"
      },
      {
        "note": "Uber",
        "amount": "123",
        "currency": "$",
        "date": "Today"
      }
    ]
  },
  {
    "id": 0,
    "name": "Starbucks",
    "cardHolderName": "Card Holder 0",
    "cardNumber": "12345678901234",
    "validity": "01/24",
    "logo": "starbucks",
    "balance": "1000",
    "transactions": [
      {
        "note": "Slack Technologies",
        "amount": "123",
        "currency": "$",
        "date": "Today"
      },
      {
        "note": "Uber",
        "amount": "123",
        "currency": "$",
        "date": "Today"
      },
      {
        "note": "Uber",
        "amount": "123",
        "currency": "$",
        "date": "Today"
      },
      {
        "note": "Uber",
        "amount": "123",
        "currency": "$",
        "date": "Today"
      }
    ]
  },
]

const contentContainerStyleAndroid = (itemCount: number) => {
  const deviceHeight: number = Dimensions.get('window').height;
  const scrollViewContentHeightAdjustment = itemCount * 28 + deviceHeight;
  const contentContainerStyle = {
    flexGrow: 1,
    height: scrollViewContentHeightAdjustment,
  };
  const style = Platform.OS == 'ios' ? {} : contentContainerStyle;
  return style;
};

export function Home({ navigation }) {
  
  const [cardData, setCardData] = useState(data);
  const contentContainerStyle = contentContainerStyleAndroid(cardData.length);
  const sharedValue = useSharedValue(0);
  const { useRealm, useQuery } = LocalRealmContext;
  const realm = useRealm();
  const users = useQuery(MODEL_NAMES.User); // Replace 'User' with MODEL_NAMES.User if necessary
  console.log(users)
  
  useEffect(() => {
    // Check if there are any users in the database
    if (users.isEmpty()) {
      try {
        // Writing to the database
        realm.write(() => {
          realm.create(MODEL_NAMES.User, {
            id: new Realm.BSON.ObjectId(),
            username: 'NewUser' // Example username
          });
        });
        console.log("New user added to the database!");
      } catch (error) {
        console.error("Failed to write to the database:", error);
      }
    } else {
      console.log("User already exists in the database.");
    }
  }, [realm, users]); // Depend on realm and users to re-run if they change
  
  const onScrollFlatList = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let value = event.nativeEvent.contentOffset.y;
    sharedValue.value = value;
  }

  const handleOnPressCardView = (card) => {
    navigation.navigate(SCREENS.HOME_STACK.GIFT_CARD_DETAILS, {
      data: card,
    });
  };

  const renderItem = (data) => (
    <GiftCardStackRenderItem
      onPress={handleOnPressCardView}
      sharedValue={sharedValue}
      data={data}
    />
  )

  return (
    <Page fullWidth>  
        <FlatList
        contentContainerStyle={contentContainerStyle}
        data={cardData}
        renderItem={renderItem}
        keyExtractor={item => `key-${item.id}`}
        showsHorizontalScrollIndicator={false}
        onScroll={onScrollFlatList}
        scrollEventThrottle={16}
        initialNumToRender={10}
      />
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  flatListItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  flatListHeaderContainer: {
    padding: 10,
    height: 120,
    backgroundColor: colors.black,
    justifyContent: 'flex-end',
  },
  flatListHeaderTitle: {
    color: colors.white,
    fontSize: 40,
    fontWeight: 'bold',
  },
});