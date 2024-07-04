import { Link } from 'expo-router';
import { View, ScrollView } from 'react-native';

import { Button } from '~/components/Button';
import Container from '~/components/Container';
import HeaderBar from '~/components/HeaderBar';
import FText from '~/components/Text/FText';
import FTitle from '~/components/Text/FTitle';
import ThemeToggle from '~/components/ThemeToggle';
import { Frame } from '~/components/Wrappers/Frame';
import {usePrivy} from '@privy-io/expo';
import CreateWalletButton from '~/components/CreateWalletButton';
import { LoginScreen } from '../login';

import 'fast-text-encoding';
import 'react-native-get-random-values';
import '@ethersproject/shims';

export default function Tab() {
  const {isReady} = usePrivy();
  const {user} = usePrivy();

  if (!isReady) {
    return <FText>Loading...</FText>; // TODO: Make a loading screen
  }

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <Frame>
      <HeaderBar />
      <ScrollView>
        <FTitle className="text-4xl">Welcome to Fundamental!</FTitle>
        <FText className="text-lg">This is Fundamental</FText>
        <View className="mx-auto">
          <ThemeToggle />
        </View>
        <Container title="Hello" className="mt-4">
          <View>
            <FText>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum."
            </FText>
          </View>
        </Container>
        <Container title="Hello" className="mt-4">
          <View>
            <FText>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum."
            </FText>
          </View>
        </Container>
        <View className="mx-auto">
          <CreateWalletButton />
          </View>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
      </ScrollView>
    </Frame>
  );
}
