import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

export type TextProps = RNTextProps;

export function Text(props: TextProps) {
  return <RNText {...props} />;
}
