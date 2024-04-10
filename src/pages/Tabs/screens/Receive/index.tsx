import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Receive } from './Receive';
import { SCREENS } from '@constants';

const Stack = createNativeStackNavigator();

export default function ReceiveStack() {
  const defaultScreenOptions = {
    headerShown: true,
    headerTitle: '',
    headerTintColor: '#0F0',
    headerShadowVisible: false,
  };

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen
      name={SCREENS.RECEIVE_STACK.RECEIVE}
      component={Receive}
      options={{...defaultScreenOptions}}
      />
    </Stack.Navigator>
  );
}
