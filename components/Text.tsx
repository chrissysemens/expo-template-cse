import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import { useTheme } from '../theme/useTheme';
import { fontFamilies, getFontSize, getLineHeight } from '../theme/typography';

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
  variant?: Variant;
  weight?: Weight;
  tone?: 'default' | 'muted';
};

export function Text({
  variant = 'md',
  weight = 'regular',
  tone = 'default',
  style,
  ...props
}: Props) {
  const { colors } = useTheme();

  const textStyle: TextStyle = {
    fontFamily: fontFamilies[weight],
    fontSize: getFontSize(variant),
    lineHeight: getLineHeight(variant),
    color: tone === 'muted' ? colors.mutedText : colors.text,
  };

  return (
    <RNText
      {...props}
      maxFontSizeMultiplier={caps[variant]}
      style={[textStyle, style]}
    />
  );
}
