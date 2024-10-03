import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import SideBarMenu from './SideBarMenu';
import Title from './Text/FTitle';

const fundy = require('../assets/fundy.png');

const TitleBar = ({ title }: { title: string }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <View className="h-50 flex-row items-center gap-2 py-4">
      {/* Add sidebarmenu here */}
      <TouchableOpacity onPress={toggleSideBar}>
        <Feather name="menu" size={36} className="text-text" />
      </TouchableOpacity>
      {/* <Feather name="menu" className="text-text" size={36} /> */}
      <Title className="mt-2 text-4xl text-text">{title}</Title>
      <Image
        source={fundy}
        style={{ marginLeft: 'auto', height: 64, width: 96 }}
        resizeMode="contain"
      />
      {/* <SideBarMenu isOpen={isSideBarOpen} toggleSideBar={toggleSideBar} /> */}
    </View>
  );
};

export default TitleBar;
