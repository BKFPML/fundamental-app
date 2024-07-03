import { Button } from './Button';
import { useTheme } from './Wrappers/ThemeWrapper';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  return <Button onPress={toggleTheme} title="Toggle Theme" />;
};

export default ThemeToggle;
