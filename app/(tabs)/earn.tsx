import { View } from 'react-native';

import HeaderBar from '~/components/HeaderBar';
import FText from '~/components/Text/FText';
import { Frame } from '~/components/Wrappers/Frame';

export default function Tab() {
  return (
    <Frame>
      <HeaderBar title="Earn" />
      <View>
        <FText className="text-2xl">Earn Page</FText>
      </View>
    </Frame>
  );
}
