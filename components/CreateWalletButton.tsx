import { useEmbeddedWallet, isNotCreated } from '@privy-io/expo';
import { Button, Alert } from 'react-native';

const CreateWalletButton = () => {
  const wallet = useEmbeddedWallet();

  const handleCreateWallet = async () => {
    try {
      await wallet.create({ recoveryMethod: 'privy' });
    } catch (error) {
      Alert.alert('Error', 'Failed to create wallet: ' + error.message);
    }
  };

  if (isNotCreated(wallet) === true) {
    return <Button onPress={handleCreateWallet} title='Create Wallet' />;
  }

  return null;
};

export default CreateWalletButton;
