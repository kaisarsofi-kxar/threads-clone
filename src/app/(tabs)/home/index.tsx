import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold text-red-500">heloo</Text>

      <Link href="/welcome">Welcome</Link>
      <StatusBar style="auto" />
    </View>
  );
}
