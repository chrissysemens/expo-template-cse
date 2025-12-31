import { Stack } from 'expo-router';
import { enableScreens } from 'react-native-screens';

enableScreens();

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default RootLayout;
