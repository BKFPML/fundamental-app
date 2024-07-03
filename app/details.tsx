import { Stack, useLocalSearchParams } from 'expo-router';

import { ScreenContent } from '~/components/ScreenContent';
import { Frame } from '~/components/Wrappers/Frame';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Frame>
        <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
      </Frame>
    </>
  );
}
