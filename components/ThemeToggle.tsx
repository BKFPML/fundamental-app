import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { useTheme } from './Wrappers/ThemeWrapper';

const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <TouchableOpacity onPress={toggleTheme}>
      {theme === 'light' ? (
        <Feather name="sun" size={42} className="text-text" />
      ) : (
        <Feather name="moon" size={42} className="text-text" />
      )}
    </TouchableOpacity>
  );
};

export default ThemeToggle;
