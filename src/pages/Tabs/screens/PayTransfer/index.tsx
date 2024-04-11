import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PayTransfer } from './PayTransfer';
import { SCREENS } from '@constants';
import { CustomHeader } from '@components/atoms/CustomHeader';

const Stack = createNativeStackNavigator();

export default function PayTransferStack() {

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
      name={SCREENS.PAYTRANSFER_STACK.PAYTRANSFER} 
      component={PayTransfer}
      options={{...defaultScreenOptions}}
      />
    </Stack.Navigator>
  );
}
