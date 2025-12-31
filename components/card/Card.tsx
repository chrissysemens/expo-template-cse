import { ReactNode } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { useTheme } from 'theme/useTheme';

type Props = {
  children: ReactNode;
};
const Card = ({ children }: Props) => {
  const { colours } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: colours.surface }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'flex-start',
    minHeight: 150,
    minWidth: 250,
    borderRadius: 10,
    padding: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
});

export { Card };
