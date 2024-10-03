import '../global.css';

import { PrivyProvider } from '@privy-io/expo';
import { Stack } from 'expo-router';

import { ThemeWrapper } from '~/components/Wrappers/ThemeWrapper';

const Layout = () => {
  return (
    <PrivyProvider appId="clxd5oc5m007jrpv8y8clt6z7">
      <ThemeWrapper>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: true }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
      </ThemeWrapper>
    </PrivyProvider>
  );
};

export default Layout;
