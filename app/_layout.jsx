import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf')
  })

  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="login/index" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="homepage/index" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="member/index"
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="payment/create"
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="payment/edit"
        options={{
          headerShown:false
        }}
      />
    </Stack>
  );
}