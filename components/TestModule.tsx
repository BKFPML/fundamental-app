import { useEmbeddedWallet, isNotCreated, usePrivy } from '@privy-io/expo';
import React from 'react';
import { Alert, View } from 'react-native';
import alchemy from './Services/alchemyService';

import { Button } from './Button';
import Container from './Container';
import FText from './Text/FText';

const TestModule = () => {
  const user = usePrivy();
  const wallet = useEmbeddedWallet();


  if (isNotCreated(wallet)) {
    return <FText className="text-lg">Wallet not created</FText>;
  }

  return (
    <View>
      <Container className="" title="Test Module">
        <FText className="text-lg">Your address is {wallet.account?.address}</FText>
        <Button onPress={() => alchemy.getEthBalance(wallet.account?.address ?? "")} className="bg-primary" title="Get ETH Balance" />
      </Container>
    </View>
  );
};

export default TestModule;
