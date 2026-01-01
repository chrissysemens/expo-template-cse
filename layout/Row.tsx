import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { useTheme } from '../theme/useTheme';

type SpaceKey = keyof ReturnType<typeof useTheme>['theme']['spacing'];

type Props = ViewProps & {
  gap?: SpaceKey;
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  wrap?: boolean;
};

export const Row = ({
  gap = 3,
  align = 'center',
  justify,
  wrap = false,
  style,
  children,
  ...props
}: Props) => {
  const { theme } = useTheme();
  const kids = React.Children.toArray(children).filter(Boolean);

  return (
    <View
      {...props}
      style={[
        {
          flexDirection: 'row',
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap ? 'wrap' : 'nowrap',
        },
        style,
      ]}
    >
      {kids.map((child, i) => (
        <View
          key={i}
          style={i === 0 ? undefined : { marginLeft: theme.spacing[gap] }}
        >
          {child}
        </View>
      ))}
    </View>
  );
};
