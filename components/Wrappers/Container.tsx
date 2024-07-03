import { SafeAreaView, View } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className={styles.outerMargin}>
      <SafeAreaView className={styles.container}>{children}</SafeAreaView>
    </View>
  );
};

const styles = {
  outerMargin: 'flex flex-1 bg-background',
  container: 'flex flex-1 m-6 bg-background h-screen',
};
