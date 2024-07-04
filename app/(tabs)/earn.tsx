import { Link } from 'expo-router';
import { View } from 'react-native';

import FText from '~/components/Text/FText';
import { Frame } from '~/components/Wrappers/Frame';

export default function Tab() {
  return (
    <Frame>
      <View>
        <FText className="text-2xl">Earn Page</FText>

        {/* <Link href="/">
          <FText>Go back</FText>
        </Link> */}
      </View>
    </Frame>
  );
}
