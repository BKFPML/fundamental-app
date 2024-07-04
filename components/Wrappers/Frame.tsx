import { SafeAreaView, View } from 'react-native';

import NavBar from '../NavBar';

export const Frame = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className={styles.outerMargin}>
      <SafeAreaView className={styles.frame}>{children}</SafeAreaView>
      {/* <NavBar /> */}
    </View>
  );
};

const styles = {
  outerMargin: 'flex flex-1 bg-background',
  frame: 'flex flex-1 m-6 bg-background h-screen',
};
