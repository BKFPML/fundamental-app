import { useEmbeddedWallet, isNotCreated, usePrivy, getUserEmbeddedWallet, PrivyEmbeddedWalletProvider } from '@privy-io/expo';
import React from 'react';
import { Alert, View } from 'react-native';
import alchemy from '../Services/alchemyService';
import signMessage from '~/Services/privyService';
import { isConnected, needsRecovery } from '@privy-io/expo';
import { Button } from './Button';
import Container from './Container';
import FText from './Text/FText';

const TestModule = () => {
  const user = usePrivy();
  const wallet = useEmbeddedWallet();

  if (isNotCreated(wallet)) {
    return <FText className="text-lg">Wallet not created</FText>;
  }

  if (wallet.status === 'connected') {
    const provider = wallet.provider;
  }
  const handleSignMessage = async ( message : string) => {
    try {
      if (!isConnected(wallet)) {
        throw new Error("Wallet not connected");
      }
      if (!user.user) {
        throw new Error("No user found");
      }
      const provider = wallet.provider;

      await signMessage(provider, user.user, message);
    } catch (error) {
      console.error("Failed to sign message:", error);
    }
  };

  return (
    <View>
      <Container className="" title="Test Module">
        <FText className="text-lg">Your address is {wallet.account?.address}</FText>
        <Button onPress={() => alchemy.getEthBalance(wallet.account?.address ?? "")} className="bg-primary" title="Get ETH Balance" />
        <FText className="text-lg">Privy DID is {user.user?.id}</FText>
        <Button onPress={() => handleSignMessage("")} className="bg-primary" title="Sign Message" />
      </Container>
    </View>
  );
};

export default TestModule;
