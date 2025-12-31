import { View, Pressable } from 'react-native';
import { Text } from '../components/Text';
import { useAppStore } from '../state/useAppStore';
import { useTheme } from '../theme/useTheme';

export default function Home() {
  const { colors, resolved } = useTheme();
  const themeMode = useAppStore((s) => s.themeMode);
  const setThemeMode = useAppStore((s) => s.setThemeMode);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
        gap: 12,
      }}
    >
      <Text variant="lg" weight="semibold">
        Theme
      </Text>
      <Text tone="muted">
        mode: {themeMode} (resolved: {resolved})
      </Text>

      {(['system', 'light', 'dark'] as const).map((m) => {
        const selected = themeMode === m;
        return (
          <Pressable
            key={m}
            onPress={() => setThemeMode(m)}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 10,
              backgroundColor: selected ? colors.card : 'transparent',
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text weight={selected ? 'bold' : 'regular'}>{m}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
