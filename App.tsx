import Realm from "realm";
import React, { useEffect } from "react";
import { GluestackUIProvider, Text, Box, VStack } from "@gluestack-ui/themed";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { styled, StyledProvider } from "@gluestack-style/react";
import { StyleSheet } from "react-native";
import { RootNavigator } from './src/pages/root';
import { config } from "./config/gluestack-ui.config"
import { QueryClient, QueryClientProvider } from 'react-query';
import { LocalRealmContext } from "@src/mongodb/context";
import { LoggerVersion } from "@components/atoms/LoggerVersion";
import { sepolia, WagmiConfig } from 'wagmi'
import { defaultWagmiConfig } from '@web3modal/wagmi-react-native'

const projectId = 'c0d7cf39bd4907f89c06185508701c2c'
const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}
const chains = [sepolia]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
const { RealmProvider } = LocalRealmContext;

export default function App() {
  return (
    <RealmProvider> 
      <WagmiConfig config={wagmiConfig}>
        <StyledProvider config={config}>
            <GestureHandlerRootView style={styles.AppWrapper}>
              <RootNavigator />
            </GestureHandlerRootView>
        </StyledProvider>
      </WagmiConfig>
      <LoggerVersion/>
    </RealmProvider>
  );
}

const styles = StyleSheet.create({
  AppWrapper: { flex: 1 },
});
