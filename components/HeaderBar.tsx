import { View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Title from './Text/FTitle';

const fundy = require('../assets/fundy.png');

const TitleBar = () => {
  return (
    <View className="h-50 flex-row items-center gap-2 bg-background px-4 py-6">
      <Icon name="menu" className="text-text" size={36} />
      <Title className="mt-2 text-4xl text-text">Home</Title>
      <Image
        source={fundy}
        style={{ marginLeft: 'auto', height: 64, width: 96 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default TitleBar;
