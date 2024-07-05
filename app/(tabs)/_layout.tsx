import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

import FText from '~/components/Text/FText';
import { useTheme } from '~/components/Wrappers/ThemeWrapper';

export default function Layout() {
  const { theme } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 85,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme === 'dark' ? 'rgba(31, 29, 43	, 0.9)' : 'rgba(243, 243, 248, 0.9)',
          borderTopWidth: 0,
          paddingVertical: 15,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <Feather
                size={28}
                name="home"
                className={`${focused ? 'text-primary' : 'text-text'}`}
              />
              <FText bold className={`${focused ? '!text-primary' : '!text-text'}`}>
                Home
              </FText>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="earn"
        options={{
          title: 'Earn',
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <Feather
                size={28}
                name="percent"
                className={`${focused ? 'text-primary' : 'text-text'}`}
              />
              <FText bold className={`${focused ? '!text-primary' : '!text-text'}`}>
                Earn
              </FText>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}