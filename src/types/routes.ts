import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export enum STACKS {
  HOME = 'HomeStack',
  PAYTRANSFER = 'PayTransferStack',
  RECEIVE = 'ReceiveStack',
  EXCHANGE = 'ExchangeStack',
  MAIN = 'MainStack',
}
export enum SCREENS {}

export type BottomStack = {
  [STACKS.HOME]: undefined;
  [STACKS.PAYTRANSFER]: undefined;
  [STACKS.RECEIVE]: undefined;
  [STACKS.EXCHANGE]: undefined;
};

export type RootStack = {
  [STACKS.MAIN]: undefined;
};
