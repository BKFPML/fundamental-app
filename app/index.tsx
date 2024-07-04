import { Stack, Link } from 'expo-router';
import { ScrollView, View } from 'react-native';

import { Button } from '~/components/Button';
import Container from '~/components/Container';
import HeaderBar from '~/components/HeaderBar';
import FText from '~/components/Text/FText';
import FTitle from '~/components/Text/FTitle';
import ThemeToggle from '~/components/ThemeToggle';
import { Frame } from '~/components/Wrappers/Frame';
import {usePrivy} from '@privy-io/expo';
import CreateWalletButton from '~/components/CreateWalletButton';
import { LoginScreen } from './login';

import 'fast-text-encoding';
import 'react-native-get-random-values';
import '@ethersproject/shims';

export default function Home() {
  const {isReady} = usePrivy();
  const {user} = usePrivy();

  if (!isReady) {
    return <FText>Loading...</FText>; // TODO: Make a loading screen
  }

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Frame>
        <HeaderBar />
        <ScrollView>
          <FTitle className="text-4xl">Welcome to Fundamental!</FTitle>
          <FText className="text-lg">This is Fundamental</FText>
          <View className="mx-auto">
            <ThemeToggle />
          </View>
          {/* Make a button to create a wallet when pressed call the function CreateWalletButton */}
          <View className="mx-auto">
          <CreateWalletButton />

          </View>
        </ScrollView>
        {/* <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link> */}
      </Frame>
    </>
  );
}
