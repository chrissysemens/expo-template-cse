import { forwardRef } from 'react';
import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { useTheme } from 'theme/useTheme';
import { Text } from '../text/Text';

type Props = TextInputProps & {
  label?: string;
  error?: string;
};

const Input = forwardRef<RNTextInput, Props>(
  ({ label, error, style, ...props }, ref) => {
    const { colours } = useTheme();

    return (
      <View style={styles.wrapper}>
        {label ? <Text size="sm">{label}</Text> : null}

        <RNTextInput
          ref={ref}
          placeholderTextColor={colours.muted}
          style={[
            styles.input,
            {
              backgroundColor: colours.surface,
              color: colours.text,
              borderColor: error ? colours.danger : colours.border,
            },
            style,
          ]}
          {...props}
        />

        {error ? (
          <Text size='sm' style={[styles.error, { color: colours.danger }]}>{error}</Text>
        ) : null}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  label: {
    fontSize: 8,
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    height: 44,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 14,
  },
  error: {
    fontSize: 12,
    marginTop: 6,
  },
});

Input.displayName = 'TextInput';

export { Input };
