import { Link, Stack } from 'expo-router';

import FText from '~/components/Text/FText';
import { Frame } from '~/components/Wrappers/Frame';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Frame>
        <FText className={styles.title}>This screen doesn't exist.</FText>
        <Link href="/" className={styles.link}>
          <FText className={styles.linkText}>Go to home screen!</FText>
        </Link>
      </Frame>
    </>
  );
}

const styles = {
  title: `text-xl font-bold`,
  link: `mt-4 pt-4`,
  linkText: `text-base text-[#2e78b7]`,
};
