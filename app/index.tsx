import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

import { AppLayout } from '../layout/AppLayout';
import { Screen } from '../layout/Screen';
import { Stack } from '../layout/Stack';
import { Row } from '../layout/Row';

import { Card } from '../components/card/Card';
import { Button } from '../components/button/Button';
import { Input } from '../components/input/Input';
import { Text } from '../components/text/Text';

import { useAppStore } from '../state/useAppStore';
import { useTheme } from '../theme/useTheme';

export default function Home() {
  const { theme, resolved } = useTheme();
  const themeMode = useAppStore((s) => s.themeMode);
  const setThemeMode = useAppStore((s) => s.setThemeMode);

  const [email, setEmail] = useState('');

  return (
    <AppLayout safe padded>
      <Screen scroll>
        {/* Wrapper makes ScrollView content fill viewport so footer can sit at bottom */}
        <View style={{ flexGrow: 1, minHeight: '100%' }}>
          <Stack
            gap={6}
            style={{
              paddingTop: theme.spacing[4],
              paddingBottom: theme.spacing[6],
            }}
          >
            <Stack gap={2}>
              <Row gap={2}>
                <Text variant="h2">Template Playground</Text>
              </Row>

              <Row gap={2}>
                <Text variant="body">
                  Welcome to my personal expo template. Have fun building.
                </Text>
              </Row>

              <Text variant="body" color="muted">
                mode: {themeMode} (resolved: {resolved})
              </Text>
            </Stack>

            <Card variant="outlined">
              <Stack gap={3}>
                <Text variant="h3">Typography</Text>
                <Text variant="body">Body text looks like this.</Text>
                <Text variant="bodyStrong">Body strong looks like this.</Text>
                <Text variant="caption" color="muted">
                  Caption / helper text looks like this.
                </Text>
              </Stack>
            </Card>

            <Card variant="outlined">
              <Stack gap={3}>
                <Text variant="h3">Theme</Text>

                <Row gap={2} wrap>
                  {(['system', 'light', 'dark'] as const).map((m) => {
                    const selected = themeMode === m;

                    return (
                      <Pressable
                        key={m}
                        onPress={() => setThemeMode(m)}
                        style={{
                          paddingVertical: theme.spacing[2],
                          paddingHorizontal: theme.spacing[3],
                          borderRadius: theme.radii.pill,
                          backgroundColor: selected
                            ? theme.colours.primarySoft
                            : 'transparent',
                          borderWidth: 1,
                          borderColor: theme.colours.border,
                        }}
                      >
                        <Text
                          variant={selected ? 'bodyStrong' : 'body'}
                          color={selected ? 'primary' : 'text'}
                        >
                          {m}
                        </Text>
                      </Pressable>
                    );
                  })}
                </Row>

                <Row gap={2} wrap>
                  <Button text="Primary" onPress={() => {}} />
                  <Button
                    text="Secondary"
                    variant="secondary"
                    onPress={() => {}}
                  />
                  <Button text="Ghost" variant="ghost" onPress={() => {}} />
                  <Button text="Danger" variant="danger" onPress={() => {}} />
                </Row>

                <Row gap={2} wrap>
                  <Button text="Loading" loading onPress={() => {}} />
                  <Button text="Disabled" disabled onPress={() => {}} />
                </Row>
              </Stack>
            </Card>

            <Card variant="outlined">
              <Stack gap={3}>
                <Text variant="h3">Inputs</Text>

                <Input
                  label="Email"
                  placeholder="you@domain.com"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  helperText="We’ll never share your email."
                />

                <Input
                  label="With error"
                  placeholder="Type something…"
                  error="This field is required."
                />
              </Stack>
            </Card>
          </Stack>

          {/* Spacer pushes footer down when content is short */}
          <View style={{ flex: 1 }} />

          <Row justify="flex-end" style={{ paddingBottom: theme.spacing[2] }}>
            <Text variant="caption" color="muted">
              Chrissy Semens © 2026
            </Text>
          </Row>
        </View>
      </Screen>
    </AppLayout>
  );
}
