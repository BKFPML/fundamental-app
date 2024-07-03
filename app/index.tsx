import { Stack, Link } from 'expo-router';
import { View } from 'react-native';

import { Button } from '~/components/Button';
import HeaderBar from '~/components/HeaderBar';
import FText from '~/components/Text/FText';
import FTitle from '~/components/Text/FTitle';
import ThemeToggle from '~/components/ThemeToggle';
import { Frame } from '~/components/Wrappers/Frame';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Frame>
        <HeaderBar />
        <FTitle className="text-4xl">Welcome to Fundamental!</FTitle>
        <FText className="text-lg">This is Fundamental</FText>
        <View className="mx-auto">
          <ThemeToggle />
        </View>
        {/* <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link> */}
      </Frame>
    </>
  );
}
