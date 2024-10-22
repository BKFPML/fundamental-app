import { Feather } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { View, Image, TouchableOpacity } from 'react-native';

import Title from './Text/FTitle';

const fundy = require('../assets/fundy.png');

/**
 * TitleBar Component
 *
 * This component renders a title bar with a menu icon, a title, and an image.
 * The menu icon triggers the opening of a drawer when pressed. The component
 * uses the `useNavigation` hook to handle navigation actions.
 *
 * @param {object} props - The props for the TitleBar component.
 * @param {string} props.title - The title text to be displayed in the title bar.
 *
 * @returns {JSX.Element} The title bar containing a menu button, title text, and an image.
 *
 * @example
 * ```tsx
 * <TitleBar title="Home" />
 * ```
 *
 * @remarks
 * - The menu icon uses the `Feather` icon library with the `menu` icon.
 * - The `openDrawer` function dispatches a navigation action to open the drawer.
 * - The `fundy` image is displayed on the right side of the title bar.
 */
const TitleBar = ({ title }: { title: string }): JSX.Element => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View className="h-50 z-10 flex-row items-center gap-2 py-4">
      <TouchableOpacity onPress={openDrawer}>
        <Feather name="menu" size={36} className="text-text" />
      </TouchableOpacity>
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
