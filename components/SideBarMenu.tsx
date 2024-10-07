import { Feather } from '@expo/vector-icons';
import { useRef, useEffect } from 'react';
import { View, TouchableOpacity, Dimensions, Animated, Easing } from 'react-native';

import FText from './Text/FText';
import FTitle from './Text/FTitle';
import ThemeToggle from './ThemeToggle';

interface SideBarMenuProps {
  isOpen: boolean;
  toggleSideBar: () => void;
}

const SideBarMenu = ({ isOpen, toggleSideBar }: SideBarMenuProps) => {
  // if (!isOpen) return null;

  const translateX = useRef(new Animated.Value(-450)).current;

  // compute screen height
  const screenHeight = Dimensions.get('screen').height;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOpen ? 0 : -450,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  return (
    <Animated.View
      className="absolute left-[-25px] top-0 w-[450px] flex-row"
      style={{ height: screenHeight, transform: [{ translateX }] }}>
      <View className="w-80 bg-primary p-[32px]">
        <View className="flex-row items-center justify-between">
          <FTitle className="mt-2 text-4xl text-white">Fundamental</FTitle>
          <TouchableOpacity onPress={toggleSideBar} className="">
            <Feather name="x" size={36} color="white" />
          </TouchableOpacity>
        </View>
        <View className="mt-5">
          <View className="mb-5 rounded-xl border-4 border-white p-3">
            <FText className="text-white">User Data</FText>
            <FText className="text-white" italic>
              Wallet Address
            </FText>
          </View>
          <TouchableOpacity className="mb-5">
            <FText className="text-white">Profile</FText>
          </TouchableOpacity>
          <TouchableOpacity className="mb-5">
            <FText className="text-white">Notifications</FText>
          </TouchableOpacity>
        </View>
        <ThemeToggle />
      </View>

      <TouchableOpacity className="flex-1 opacity-50" activeOpacity={1} onPress={toggleSideBar} />
    </Animated.View>
  );
};

export default SideBarMenu;
