import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // FontAwesome or any other icon set you prefer

import { useTheme } from './Wrappers/ThemeWrapper';

const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <TouchableOpacity onPress={toggleTheme}>
      {theme === 'light' ? (
        <Icon name="sun" size={42} className="text-text" />
      ) : (
        <Icon name="moon" size={42} className="text-text" />
      )}
    </TouchableOpacity>
  );
};

export default ThemeToggle;
