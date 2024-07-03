import { Stack, useLocalSearchParams } from 'expo-router';

import { ScreenContent } from '~/components/ScreenContent';
import { Container } from '~/components/Wrappers/Container';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
      </Container>
    </>
  );
}
