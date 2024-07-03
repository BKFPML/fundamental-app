import '../global.css';

import { Stack } from 'expo-router';

import { ThemeWrapper } from '~/components/Wrappers/ThemeWrapper';

const Layout = () => {
  return (
    <ThemeWrapper>
      <Stack />
    </ThemeWrapper>
  );
};

export default Layout;
