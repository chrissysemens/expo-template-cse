import React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '../theme/useTheme';

type Props = ViewProps & {
  children: React.ReactNode;
  padded?: boolean;
};

export function AppLayout({
  children,
  padded = false,
  style,
  ...props
}: Props) {
  const { colors } = useTheme();

  return (
    <View
      {...props}
      style={[
        { flex: 1, backgroundColor: colors.background },
        padded && { padding: 20 },
        style,
      ]}
    >
      {children}
    </View>
  );
}
