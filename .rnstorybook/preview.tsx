import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../components/button/Button';
import type { Preview } from '@storybook/react-native';
import { useTheme } from '../theme/useTheme';
import { AppLayout } from '../layout/AppLayout';
import { useAppStore } from '../state/useAppStore';

const Background = ({ children }: { children: React.ReactNode }) => {
  const { colours } = useTheme();
  const { themeMode, setThemeMode } = useAppStore();
  return (
    <>
    <Button text={'Toggle theme'} onPress={() => themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light')} />
    <View style={[styles.bg, { backgroundColor: colours.bg }]}>
      {children}
    </View>
    </>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for stories',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {
      const mode = context.globals.theme as 'light' | 'dark';

      return (
        <AppLayout>
          <Background>
            <Story />
          </Background>
          </AppLayout>
      );
    },
  ],
};

export default preview;

const styles = StyleSheet.create({
  bg: { flex: 1, padding: 16 },
});
