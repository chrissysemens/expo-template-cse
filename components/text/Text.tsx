import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import { useTheme } from '../../theme/useTheme';
import {
  fontFamilies,
  getFontSize,
  getLineHeight,
} from '../../theme/typography';

type Variant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type Weight = keyof typeof fontFamilies;

const caps: Record<Variant, number> = {
  xs: 1.2,
  sm: 1.2,
  md: 1.3,
  lg: 1.3,
  xl: 1.4,
  '2xl': 1.4,
  '3xl': 1.4,
};

type Props = RNTextProps & {
  size?: Variant;
  weight?: Weight;
  tone?: 'default' | 'muted';
};

const Text = ({
  size = 'sm',
  weight = 'regular',
  tone = 'default',
  style,
  ...props
}: Props) => {
  const { colours } = useTheme();

  const textStyle: TextStyle = {
    fontFamily: fontFamilies[weight],
    fontSize: getFontSize(size),
    lineHeight: getLineHeight(size),
    color: tone === 'muted' ? colours.muted : colours.text,
  };

  return (
    <RNText
      {...props}
      maxFontSizeMultiplier={caps[size]}
      style={[textStyle, style]}
    />
  );
};

export { Text };
