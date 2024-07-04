import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import Text from '~/components/Text/Text';
import Title from '~/components/Text/Title';

import 'fast-text-encoding';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import {PrivyProvider} from '@privy-io/expo';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Container>
      <PrivyProvider appId={'clxd5oc5m007jrpv8y8clt6z7'}>
        <Title className="text-4xl">Welcome to Fundamental!</Title>
        <Text className="text-lg">This is Fundamental</Text>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
        </PrivyProvider>
      </Container>
    </>
  );
}
