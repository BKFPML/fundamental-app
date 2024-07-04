import '../global.css';

import { Stack } from 'expo-router';

import { ThemeWrapper } from '~/components/Wrappers/ThemeWrapper';

import {PrivyProvider} from '@privy-io/expo';

const Layout = () => {
  return (
    <PrivyProvider appId="clxd5oc5m007jrpv8y8clt6z7">
      <ThemeWrapper>
        <Stack />
      </ThemeWrapper>
    </PrivyProvider>
  );
};

export default Layout;

// Use Stack Navigator?
