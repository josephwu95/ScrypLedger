import { tabBarIcon } from '@components/atoms/TabIcon';
import { BottomStack, STACKS } from '@src/types/routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '@pages/Tabs/screens/Home';
import ExchangeStack from '@pages/Tabs/screens/Exchange';
import PayTransferStack from '@pages/Tabs/screens/PayTransfer';
import ReceiveStack from '@pages/Tabs/screens/Receive';

const PageIcons = {
  home: tabBarIcon('home', 'AntDesign'),
  payTransfer: tabBarIcon('attach-money', 'MaterialIcons'),
  received: tabBarIcon('download', 'AntDesign'),
  exchange: tabBarIcon('currency-exchange', 'MaterialIcons'),
};

const Tab = createBottomTabNavigator<BottomStack>();
export function Tabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '$primary',
          tabBarStyle: { 
            height: 80,
            backgroundColor: '#f3faff' // Set the background color here
          },
        })}
      >
        <Tab.Screen
          name={STACKS.HOME}
          component={HomeStack}
          options={{ tabBarIcon: PageIcons.home }}
        />
        <Tab.Screen
          name={STACKS.PAYTRANSFER}
          component={PayTransferStack }
          options={{ tabBarIcon: PageIcons.payTransfer }}
        />
        <Tab.Screen
          name={STACKS.RECEIVE}
          component={ReceiveStack}
          options={{ tabBarIcon: PageIcons.received }}
        />
        <Tab.Screen
          name={STACKS.EXCHANGE}
          component={ExchangeStack}
          options={{ tabBarIcon: PageIcons.exchange }}
        />
      </Tab.Navigator>
  );
}