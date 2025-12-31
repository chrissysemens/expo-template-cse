import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../theme/useTheme';
import { AppLayout } from 'layout/AppLayout';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const { resolved, colors } = useTheme();

  return (
    <SafeAreaProvider>
      <AppLayout safe padded>
        <StatusBar
          style={resolved === 'dark' ? 'light' : 'dark'}
          backgroundColor={colors.background}
        />
        <Stack screenOptions={{ headerShown: false }} />
      </AppLayout>
    </SafeAreaProvider>
  );
}
