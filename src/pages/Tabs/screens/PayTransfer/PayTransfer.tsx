import '@walletconnect/react-native-compat'
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { PagePadding, ScrollablePage, PageHeader, Page } from "@components/molecules/Page";
import { BarCodeScanner } from 'expo-barcode-scanner';
import '@src/types/polyfills'
import {createPublicClient, formatEther, http} from "viem";
// import {mainnet} from "viem/chains";
// import {useWalletConnectModal, WalletConnectModal} from "@walletconnect/modal-react-native";
// import { useWeb3Modal } from '@web3modal/wagmi-react-native'
import { WagmiConfig,useContractRead, useAccount } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal, useWeb3Modal } from '@web3modal/wagmi-react-native'
import { VStack } from '@gluestack-ui/themed';
import abi from '@src/resource/ercabi.json'

// const publicClient = createPublicClient({
//   chain: mainnet,
//   transport: http(),
// })

// const [blockNumber, setBlockNumber] = useState(0n)
  // const [gasPrice, setGasPrice] = useState(0n)
  // const { open, isConnected, provider, address: wcAddress } = useWalletConnectModal()

//   useEffect(() => {
//     const getNetworkData = async () => {
//       const [blockNumber, gasPrice] = await Promise.all([
//           publicClient.getBlockNumber(),
//           publicClient.getGasPrice(),
//       ])
//       setBlockNumber(blockNumber)
//       setGasPrice(gasPrice)
//     }

//     getNetworkData();
// }, []);


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
const chains = [mainnet, polygon, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

const t = {
  payTransfer: 'Pay/Transfer',
};

export function PayTransfer() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const {address,isConnecting,isDisconnected,isConnected} = useAccount()
  const { open } = useWeb3Modal()
  const deltaMilesAddress = '0x5d366159E39c4BBde96473d558d2915689D07e6c'
  const {data:CounterValue,isError,isLoading} = useContractRead({
    address:deltaMilesAddress,
    abi:abi.abi,
    functionName:"balanceOf",
    args: ['0xB54271D82813D21F8508FFffc005EdeDf72E1Bf9'],
    // watch: true
  })

  console.log(CounterValue)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
        />
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <Page>
      <PagePadding>
      <VStack style={styles.container}>
        <Text style={styles.title}>Pay</Text>
        <Text style={styles.paragraph}>Scan a barcode</Text>
        {renderCamera()}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScanned(false)}
          disabled={scanned}
        >
          <Text style={styles.buttonText}>Scan QR to Start your job</Text>
        </TouchableOpacity>
        <View style={{marginVertical:30}}>
        
          <TouchableOpacity style={styles.button} onPress={() => open()}>
            <Text style={styles.buttonText}> Access Wallets</Text>
          </TouchableOpacity>
          <Web3Modal />
          {/* <View>
            {isLoading && <Text>Loading</Text>}
            {isSuccess && <Text>Response: {data?.toString()}</Text>}
            {isError && <Text>Error reading contract</Text>}
          </View> */}
      </View>
      </VStack>
      </PagePadding>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    width: '80%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});