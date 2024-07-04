import { Stack, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import FText from '~/components/Text/FText';
import { Frame } from '~/components/Wrappers/Frame';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Frame>
        <View>
          <FText className="text-2xl">Details for {name}</FText>
        </View>
      </Frame>
    </>
  );
}
