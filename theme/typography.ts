import { scaleFont } from './scale';

export const fontFamilies = {
  regular: 'InterRegular',
  medium: 'InterMedium',
  semibold: 'InterSemiBold',
  bold: 'InterBold',
};

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  '2xl': 26,
  '3xl': 32,
} as const;

export const lineHeights = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 26,
  xl: 30,
  '2xl': 34,
  '3xl': 40,
} as const;

// Only scale larger sizes (keeps body text stable)
export function getFontSize(variant: keyof typeof fontSizes) {
  const base = fontSizes[variant];
  return variant === 'xl' || variant === '2xl' || variant === '3xl'
    ? scaleFont(base)
    : base;
}

export function getLineHeight(variant: keyof typeof lineHeights) {
  const base = lineHeights[variant];
  return variant === 'xl' || variant === '2xl' || variant === '3xl'
    ? scaleFont(base)
    : base;
}
