import {
  useFonts,
  DMSerifText_400Regular,
  DMSerifText_400Regular_Italic,
} from '@expo-google-fonts/dm-serif-text';
import { Text } from 'react-native';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  italic?: boolean;
}

/**
 * FTitle Component
 *
 * This component renders a title using the DM Serif Text font family, with an option
 * to make the text italic. It leverages the `useFonts` hook to ensure the necessary
 * fonts are loaded before displaying the text.
 *
 * @param {object} props - The props for the FTitle component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the title component.
 * @param {string} [props.className] - Additional class names to apply for styling.
 * @param {boolean} [props.italic] - Whether the title text should be italic. Defaults to false.
 * @param {any} props - Additional props that are passed down to the underlying Text component.
 *
 * @returns {JSX.Element | null} The styled title text component or null if the fonts are not yet loaded.
 *
 * @example
 * ```tsx
 * <FTitle italic>
 *   This is an italic title.
 * </FTitle>
 * ```
 */
const FTitle = ({ children, className, italic, ...props }: TitleProps): JSX.Element | null => {
  const [fontsLoaded] = useFonts({
    DMSerifText_400Regular,
    DMSerifText_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  const font = italic ? 'DMSerifText_400Regular_Italic' : 'DMSerifText_400Regular';

  return (
    <Text className={`${className} text-text`} style={{ fontFamily: font }} {...props}>
      {children}
    </Text>
  );
};

export default FTitle;
