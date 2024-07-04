import '../global.css';

import { Stack } from 'expo-router';

import { ThemeWrapper } from '~/components/Wrappers/ThemeWrapper';

const Layout = () => {
  return (
    <ThemeWrapper>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeWrapper>
  );
};

export default Layout;

// Use Stack Navigator?
