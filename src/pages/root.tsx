import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomStack, STACKS, RootStack } from '../types/routes';
import { Tabs } from './Tabs/tab';

const Stack = createNativeStackNavigator<RootStack>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Tabs}
          name={STACKS.MAIN}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const RootNavigator = memo(Routes);