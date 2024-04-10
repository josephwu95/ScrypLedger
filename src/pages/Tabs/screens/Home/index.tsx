import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home";
import { GiftCardDetails } from "./GiftCardDetails";
import { SCREENS } from "@constants";
import { strings } from '@src/resource';
import { BackButton } from "@components/atoms/BackButton/BackButton";

const Stack = createNativeStackNavigator();
const defaultScreenOptions = {
  headerShown: true,
  headerTitle: "",
  headerTintColor: "$primary",
  headerShadowVisible: false,
};

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen
        name={SCREENS.HOME_STACK.HOME}
        component={Home}
        options={{ ...defaultScreenOptions }}
      />
      <Stack.Screen
        name={SCREENS.HOME_STACK.GIFT_CARD_DETAILS}
        component={GiftCardDetails}
        options={{
          ...defaultScreenOptions,
          headerLeft: () => <BackButton />,
          headerBackTitle: strings.done,
          title: "",
          // presentation: "transparentModal",
          // animation: "fade",
        }}
      />
    </Stack.Navigator>
  );
}
