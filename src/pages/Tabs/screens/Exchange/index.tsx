import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Exchange } from './Exchange';
import { SCREENS } from '@constants';
import { CloseHeader } from '@components/molecules/CloseHeader';
import { CustomHeader } from '@components/atoms/CustomHeader';

const Stack = createNativeStackNavigator();

export default function ExchangeStack() {
  const defaultScreenOptions = {
    headerShown: true,
    headerTitle: '',
    headerTintColor: '#0F0',
    headerShadowVisible: false,
  };
  
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        header: () => <CustomHeader />, // Use CustomHeader as the header for all screens
        headerShadowVisible: false,
      })}
    >
      <Stack.Screen 
      name={SCREENS.EXCHANGE_STACK.EXCHANGE} 
      component={Exchange} 
      options={{...defaultScreenOptions}}
      />
    </Stack.Navigator>
  );
}

{/* <Stack.Screen
        name={SCREENS.ACCOUNT_STACK.SETTINGS}
        component={Settings}
        options={({ navigation }) => ({
          ...defaultScreenOptions,
          animation: 'slide_from_bottom',
          header: () => <CloseHeader navigation={navigation} />,
        })}
      /> */}
