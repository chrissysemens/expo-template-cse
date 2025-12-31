import { useColorScheme } from 'react-native';
import { useAppStore } from '../state/useAppStore';
import { darkColors, lightColors } from './colours';

export type ResolvedTheme = 'light' | 'dark';

export function useTheme() {
  const system = useColorScheme(); // 'light' | 'dark' | null
  const themeMode = useAppStore((s) => s.themeMode);

  const resolved: ResolvedTheme =
    themeMode === 'system' ? (system === 'dark' ? 'dark' : 'light') : themeMode;

  const colours = resolved === 'dark' ? darkColors : lightColors;

  return { themeMode, resolved, colours };
}
