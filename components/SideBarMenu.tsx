import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import FText from './Text/FText';

interface SideBarMenuProps {
  isOpen: boolean;
  toggleSideBar: () => void;
}

const SideBarMenu = ({ isOpen, toggleSideBar }: SideBarMenuProps) => {
  if (!isOpen) return null;

  // compute screen height
  const screenHeight = Dimensions.get('screen').height;

  return (
    <View className="absolute left-0 top-0 z-50 w-full flex-row" style={{ height: screenHeight }}>
      <View className="w-80 bg-gray-800 p-4 shadow-lg">
        <TouchableOpacity onPress={toggleSideBar} className="mb-4 ml-auto">
          <Feather name="x" size={24} color="white" />
        </TouchableOpacity>
        <ScrollView>
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
        </ScrollView>
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
