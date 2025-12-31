import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../theme/useTheme';

export default function RootLayout() {
  const { resolved, colors } = useTheme();

  return (
    <>
      <StatusBar
        style={resolved === 'dark' ? 'light' : 'dark'}
        backgroundColor={colors.background}
      />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
