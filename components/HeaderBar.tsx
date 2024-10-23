import { Feather } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import Title from './Text/FTitle';

const fundy = require('../assets/fundy.png');

/**
 * The Pill Message Box component is used to display text or other content when the user interacts with fundy through a visual comic book like bubble.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the pill message box.
 * @returns {JSX.Element} The pill message box frame with the children content inside.
 */
const PillMessageBox = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <View className="relative rounded-xl border-2 border-primary bg-[rgba(135,32,254,0.5)] p-3">
      <View className="absolute left-[325] top-[-13] border-b-[13px] border-l-[10px] border-r-[10px] border-b-[rgba(135,32,254,0.5)] border-l-transparent border-r-transparent" />
      {children}
    </View>
  );
};

interface HeaderBarProps {
  title: string;
  pillContent?: () => React.ReactNode;
}

//* This typedoc comment is not right
/**
 * The HeaderBar component, displayed on top of every main page of the app.
 *
 * This component contains a menu button on the left side, a page title in the center,
 * and an interactive "fundy" button on the right side that can toggle additional content.
 * When the "fundy" button is pressed, it displays the provided content (if any) via the `pillContent` function.
 *
 * @param {string} title - The page title, displayed in the center of the header bar.
 * @param {() => React.ReactNode} [pillContent] - A function that returns the content to be displayed when the user interacts with the "fundy" button.
 *
 * @returns {JSX.Element} The HeaderBar component.
 *
 * @example
 * ```tsx
 * <HeaderBar title="Dashboard" pillContent={() => <CustomComponent />} />
 * ```
 *
 * @remarks
 * - The component utilizes `useNavigation` to handle opening the drawer with the menu button.
 * - `pillContent` is optional and is displayed only when the "fundy" button is clicked.
 */
const HeaderBar = ({ title, pillContent }: HeaderBarProps): JSX.Element => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const [isPillOpened, setIsPillOpened] = useState(false);

  const togglePill = () => setIsPillOpened(!isPillOpened);

  return (
    <View className="flex flex-col">
      <View className="h-50 z-10 flex-row items-center gap-2 py-4">
        <TouchableOpacity onPress={openDrawer}>
          <Feather name="menu" size={36} className="text-text" />
        </TouchableOpacity>
        <Title className="mt-2 text-4xl text-text">{title}</Title>
        <TouchableOpacity onPress={togglePill} className="ml-auto">
          <Image source={fundy} style={{ height: 64, width: 96 }} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <View />
      {isPillOpened && pillContent && (
        <View className="relative mb-5">{pillContent && pillContent()}</View>
      )}
    </View>
  );
};

export { HeaderBar, PillMessageBox };
