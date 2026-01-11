import { Stack } from "expo-router";
import {SafeAreaView} from "react-native";

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{
          headerTitle: "StickerSmash"
        }}/>
        <Stack.Screen name="about" options={{
          headerTitle: "About",
        }}/>
      </Stack>
  )
}
