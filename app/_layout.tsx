import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from '../theme/useTheme';
import { AppLayout } from 'layout/AppLayout';

export default function RootLayout() {
  const { resolved, theme } = useTheme();

  return (
    <SafeAreaProvider>
      <AppLayout safe padded>
        <StatusBar
          style={resolved === 'dark' ? 'light' : 'dark'}
          backgroundColor={theme.colours.bg}
        />
        <Stack screenOptions={{ headerShown: false }} />
      </AppLayout>
    </SafeAreaProvider>
  );
}
