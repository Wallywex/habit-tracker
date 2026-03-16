import { Stack } from "expo-router";
import { HabitsProvider } from "./contexts/HabitsContext";

export default function RootLayout() {
  return <HabitsProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}  />
      <Stack.Screen name="addHabits" options={{ headerShown: false }} />

    </Stack>
  </HabitsProvider>;
}
