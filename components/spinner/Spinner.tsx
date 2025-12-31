import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

type LoaderProps = {
  size?: number;
  color?: string;
  thickness?: number;
};

const Spinner = ({
  size = 24,
  color = '#FFFFFF',
  thickness = 2,
}: LoaderProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = 0;
    progress.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 360}deg` }],
  }));

  return (
    <Animated.View
      style={[
        styles.loader,
        {
          alignContent: 'center',
          justifyContent: 'center',
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: thickness,
          borderColor: color,
          borderBottomColor: 'transparent',
          opacity: 0.7,
        },
        animatedStyle,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    alignSelf: 'center',
    display: 'flex',
    boxSizing: 'border-box', // harmless on RN, matches intent
  },
});

export { Spinner };
