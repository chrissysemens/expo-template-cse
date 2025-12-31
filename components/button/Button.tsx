import { Pressable, StyleSheet } from 'react-native';
import { Text } from '../text/Text';
import { Spinner } from '../spinner/Spinner';
import { useTheme } from 'theme/useTheme';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  text: string;
  onPress: () => void;
  loading?: boolean;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button = ({ text, onPress, loading = false }: Props) => {
  const { colours } = useTheme();

  const pressed = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: 1 - pressed.value * 0.02 }],
      opacity: 1 - pressed.value * 0.1,
    };
  });

  return (
    <AnimatedPressable
      style={[
        styles.button,
        animatedStyle,
        { backgroundColor: colours.primary },
      ]}
      onPress={() => !loading && onPress()}
      onPressIn={() => {
        pressed.value = withTiming(1, { duration: 120 });
      }}
      onPressOut={() => {
        pressed.value = withTiming(0, { duration: 120 });
      }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <Text size='sm' style={[styles.text, { color: colours.white }]}>{text}</Text>
      )}
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    height: 44,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    minWidth: 180,
  },
  text: {
    verticalAlign: 'middle',
  },
});

export { Button };
