import { TouchableOpacity, View } from 'react-native';
import { Text } from '../text/Text';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '../../theme/useTheme';

export type DropdownOption = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  placeholder: string;
  options: DropdownOption[];
  value: string | null;
  onChange: (value: string) => void;
  testID?: string;
};
const Dropdown = ({ label, placeholder, options, value, onChange, testID }: Props) => {
  const [open, setOpen] = useState<boolean>();
  const { theme } = useTheme();

  const selected = options.find(
    (option: DropdownOption) => option.value === value,
  );

  return (
    <>
      <Text testID="input-label" accessibilityLabel="input-label">
        {label}
      </Text>
      <TouchableOpacity
        testID={testID || 'dropdown'}
        accessibilityLabel={testID || 'dropdown'}
        style={[
          styles.dropdown,
          {
            backgroundColor: theme.colours.surface,
            borderColor: theme.colours.border,
          },
        ]}
        onPress={() => setOpen((prev) => !prev)}
      >
        <Text variant="label">{selected ? selected.label : placeholder}</Text>
      </TouchableOpacity>
      {open && (
        <View
          style={[
            styles.options,
            {
              backgroundColor: theme.colours.surface,
              borderColor: theme.colours.border,
            },
          ]}
        >
          {options.map((option: DropdownOption) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.option,
                {
                  backgroundColor: theme.colours.surface,
                },
                selected &&
                  selected.value === option.value && {
                    backgroundColor: theme.colours.primary,
                  },
              ]}
              onPress={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 44,
    display: 'flex',
    alignContent: 'center',
    verticalAlign: 'middle',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },
  options: {
    overflow: 'hidden',
    marginHorizontal: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  option: {
    paddingVertical: 10,
    paddingLeft: 8,
  },
  selected: {},
});

export { Dropdown };
