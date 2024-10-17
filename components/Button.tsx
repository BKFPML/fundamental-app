import { forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import FText from './Text/FText';

/**
 * Props for the Button component.
 * Extends the TouchableOpacityProps from React Native.
 * 
 * @property {string} title - The title text displayed on the button.
 */
type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

/**
 * Button component for reusable UI button functionality.
 * Utilizes React Native's TouchableOpacity for user interaction.
 * This component accepts all TouchableOpacityProps as well as a title for the button.
 * 
 * @param {ButtonProps} props - The properties for the button component.
 * @param {string} props.title - The title text to display within the button.
 * @param {TouchableOpacityProps} [props.touchableProps] - Additional TouchableOpacity properties that can be passed to the component.
 * @param {React.Ref<TouchableOpacity>} ref - The reference to the TouchableOpacity component.
 * 
 * @returns {JSX.Element} A TouchableOpacity component styled as a button with a title.
 * 
 * @example
 * // Example usage of Button component
 * <Button title="Click Me" onPress={() => console.log('Button pressed!')} />
 * 
 * @component
 */
export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={`${styles.button} ${touchableProps.className}`}>
        <FText className={styles.buttonText} bold>
          {title}
        </FText>
      </TouchableOpacity>
    );
  }
);

/**
 * Styles for the Button component.
 * Uses Tailwind-style classes for consistent button appearance.
 * 
 * @constant
 * @type {object}
 * 
 * @property {string} button - The style applied to the button container, including background color, padding, and rounded edges.
 * @property {string} buttonText - The style applied to the button text, including color, font size, and alignment.
 */
const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
};
