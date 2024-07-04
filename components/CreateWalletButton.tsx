import React from 'react';
import { useEmbeddedWallet, isNotCreated } from '@privy-io/expo';
import { Button, Alert } from 'react-native';

const CreateWalletButton = () => {
  const wallet = useEmbeddedWallet();

  const handleCreateWallet = async () => {
    try {
      await wallet.create({ recoveryMethod: 'privy' });
      Alert.alert('Success', 'Wallet created successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to create wallet: ' + error.message);
    }
  };

  if (isNotCreated(wallet)) {
    return <Button onPress={handleCreateWallet} title="Create Wallet" />;
  }

  return null;
};

export default CreateWalletButton;
