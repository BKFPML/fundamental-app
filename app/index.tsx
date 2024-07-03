import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import Text from '~/components/Text/Text';
import Title from '~/components/Text/Title';
import InfoCard from '~/components/InfoCard';
import { ScrollView } from 'react-native';

const moneyData = [
  { name: 'Euro', code: 'EURC', amount: '€ 1192.40', symbol: '€' },
  { name: 'Dollar', code: 'USDC', amount: '$ 0', symbol: '$' },
];

const cryptoData = [
  { name: 'Bitcoin', code: 'BTC', amount: '€ 1538.65', symbol: '₿' },
  { name: 'Ethereum', code: 'ETH', amount: '€ 964.80', symbol: 'Ξ' },
  { name: 'Solana', code: 'SOL', amount: '€ 370.22', symbol: '◎' },
  { name: 'Polygon', code: 'MATIC', amount: '€ 289.49', symbol: 'M' },
];

const penisData = [
  { name: 'Cum', code: 'CUM', amount: '€ 1538.65', symbol: '₿' },
  { name: 'Peen', code: 'PEN', amount: '€ 964.80', symbol: 'D' }
];

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Container>
        <Title className="text-4xl">Welcome to Fundamental!</Title>
        <Text className="text-lg">This is Fundamental</Text>
        <ScrollView>
          <InfoCard Title="Money" data={moneyData} />
          <InfoCard Title="Crypto" data={cryptoData} />
          <InfoCard Title="Sex" data={penisData} />
        </ScrollView>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
  );
}
