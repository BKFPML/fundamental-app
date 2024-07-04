import { Feather } from '@expo/vector-icons';
import { router, Link } from 'expo-router';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import FText from './Text/FText';

const NavBar = () => {
  return (
    <View className="absolute bottom-0 w-full flex-row justify-around bg-background py-2 pb-10 pt-4">
      <TouchableOpacity onPress={() => router.navigate('/')}>
        <Feather name="home" size={28} className="text-text" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate('/earn')}>
        <Feather name="search" size={28} className="text-text" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate('Notifications')}>
        <Feather name="bell" size={28} className="text-text" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate('Profile')}>
        <Feather name="user" size={28} className="text-text" />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
