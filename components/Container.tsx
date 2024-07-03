import { View } from 'react-native';

import FText from './Text/FText';

interface ContainerProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}
const Container = ({ title, className, children }: ContainerProps) => {
  return (
    <View className={`${className} rounded-xl bg-content`}>
      <View className="rounded-t-xl bg-primary px-4 py-2">
        <FText className="text-white" bold>
          {title}
        </FText>
      </View>
      <View className="p-4">{children}</View>
    </View>
  );
};

export default Container;
