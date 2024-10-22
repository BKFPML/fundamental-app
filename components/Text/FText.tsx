import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from '@expo-google-fonts/dm-sans';
import { Text } from 'react-native';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  italic?: boolean;
  medium?: boolean;
  bold?: boolean;
}

/**
 * FText Component
 *
 * This component renders text using the DM Sans font family, with options to customize
 * the font style by making it italic, medium, or bold. It uses the `useFonts` hook
 * to ensure that the required fonts are loaded before rendering the text.
 *
 * @param {object} props - The props for the FText component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the text component.
 * @param {string} [props.className] - Additional class names to apply for styling.
 * @param {boolean} [props.italic] - Whether the text should be italic. Defaults to false.
 * @param {boolean} [props.medium] - Whether the text should use the medium weight (500). Defaults to false.
 * @param {boolean} [props.bold] - Whether the text should use the bold weight (700). Defaults to false.
 * @param {any} props - Additional props that are passed down to the underlying Text component.
 *
 * @returns {JSX.Element | null} The styled text component or null if the fonts are not yet loaded.
 *
 * @example
 * ```tsx
 * <FText bold italic>
 *   This is bold and italic text.
 * </FText>
 * ```
 */
const FText = ({
  children,
  className,
  italic,
  medium,
  bold,
  ...props
}: TitleProps): JSX.Element | null => {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  let font = 'DMSans_400Regular';
  if (medium) font = 'DMSans_500Medium';
  if (bold) font = 'DMSans_700Bold';
  if (italic) font += '_Italic';

  return (
    <Text
      className={`${className} text-text`}
      style={{ fontFamily: font, fontSize: 18 }}
      {...props}>
      {children}
    </Text>
  );
};

export default FText;
