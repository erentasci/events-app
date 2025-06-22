import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayoutNav() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
