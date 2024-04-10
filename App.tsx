import React, { useEffect } from "react";
import { GluestackUIProvider, Text, Box, VStack } from "@gluestack-ui/themed";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { styled, StyledProvider } from "@gluestack-style/react";
import { StyleSheet } from "react-native";
import { RootNavigator } from './src/pages/root';
import { config } from "./config/gluestack-ui.config"
// import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
// import { LocalRealmContext } from "@mongodb/context";
// import { LoggerVersion } from "@components/atoms/LoggerVersion";

export default function App() {
  return (
    <StyledProvider config={config}>
      <GestureHandlerRootView style={styles.AppWrapper}>
          <RootNavigator />
      </GestureHandlerRootView>
    </StyledProvider>
  );
}

const styles = StyleSheet.create({
  AppWrapper: { flex: 1 },
});
