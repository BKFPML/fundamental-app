import { Feather } from '@expo/vector-icons';
import { View, Image } from 'react-native';

import Title from './Text/FTitle';

const fundy = require('../assets/fundy.png');

const TitleBar = ({ title }: { title: string }) => {
  return (
    <View className="h-50 flex-row items-center gap-2 py-4">
      <Feather name="menu" className="text-text" size={36} />
      <Title className="mt-2 text-4xl text-text">{title}</Title>
      <Image
        source={fundy}
        style={{ marginLeft: 'auto', height: 64, width: 96 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default TitleBar;
