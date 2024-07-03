import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import HeaderBar from '~/components/HeaderBar';
import { ScreenContent } from '~/components/ScreenContent';
import FText from '~/components/Text/FText';
import FTitle from '~/components/Text/FTitle';
import ThemeToggle from '~/components/ThemeToggle';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Container>
        <HeaderBar />
        <FTitle className="text-4xl">Welcome to Fundamental!</FTitle>
        <FText className="text-lg">This is Fundamental</FText>
        <ThemeToggle />
        {/* <ScreenContent path="app/index.tsx" title="Home" />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link> */}
      </Container>
    </>
  );
}
