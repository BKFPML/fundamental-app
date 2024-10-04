import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, Dimensions } from 'react-native';

import FText from './Text/FText';
import FTitle from './Text/FTitle';
import ThemeToggle from './ThemeToggle';

interface SideBarMenuProps {
  isOpen: boolean;
  toggleSideBar: () => void;
}

const SideBarMenu = ({ isOpen, toggleSideBar }: SideBarMenuProps) => {
  if (!isOpen) return null;

  // compute screen height
  const screenHeight = Dimensions.get('screen').height;

  return (
    <View
      className="absolute left-[-25px] top-0 w-[450px] flex-row"
      style={{ height: screenHeight }}>
      <View className="w-80 bg-primary p-[32px]">
        <View className="flex-row items-center justify-between">
          <FTitle className="mt-2 text-4xl text-white">Fundamental</FTitle>
          <TouchableOpacity onPress={toggleSideBar} className="">
            <Feather name="x" size={36} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-col space-y-5">
          <FText className="mb-4 text-lg text-white">{screenHeight}</FText>
          <TouchableOpacity className="mb-4">
            <FText className="text-white">Theme Toggle</FText>
          </TouchableOpacity>
          <TouchableOpacity className="mb-4">
            <FText className="text-white">Profile</FText>
          </TouchableOpacity>
          <TouchableOpacity className="mb-4">
            <FText className="text-white">Notifications</FText>
          </TouchableOpacity>
        </View>
        <ThemeToggle />
      </View>

      <TouchableOpacity
        className="flex-1 bg-black opacity-50"
        activeOpacity={1}
        onPress={toggleSideBar}
      />
    </View>
  );
};

export default SideBarMenu;
