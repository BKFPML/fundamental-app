import React from 'react';
import { useEmbeddedWallet, isNotCreated } from '@privy-io/expo';
import { Alert } from 'react-native';
import { Button } from './Button';

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
    return <Button onPress={handleCreateWallet} className="bg-primary pt-2" title="Create Wallet" />;
  }

  return null;
};

export default CreateWalletButton;
