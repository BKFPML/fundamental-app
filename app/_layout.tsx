import '../global.css';

import { PrivyProvider, PrivyElements } from '@privy-io/expo';
import { Stack } from 'expo-router';
import { ConfigProvider } from '~/components/configContext';
import { ThemeWrapper } from '~/components/Wrappers/ThemeWrapper';

const Layout = () => {
  return (
    <PrivyProvider appId="clxd5oc5m007jrpv8y8clt6z7">
      <ThemeWrapper>
        <ConfigProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" options={{ headerShown: true }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
          </Stack>
        </ConfigProvider>
      </ThemeWrapper>
      <PrivyElements/>
    </PrivyProvider>
  );
};

export default Layout;
