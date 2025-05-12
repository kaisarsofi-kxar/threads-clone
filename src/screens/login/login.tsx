import { supabase } from "@/lib/supabase/supabase";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    if (!email || !password) {
      Alert.alert("Please enter email and password");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 px-4 justify-center"
      >
        <Pressable onPress={() => Keyboard.dismiss()}>
          <View className="gap-6">
            <View className="gap-2 mb-8 items-center">
              <Text className="text-white text-3xl font-extrabold tracking-widest ">
                Welcome back
              </Text>
              <Text className="text-gray-400 text-lg">
                Sign in to your account
              </Text>
            </View>

            <View className="gap-4">
              <View className="gap-2">
                <Text className="text-gray-400 text-xl">Email</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  placeholderTextColor="#666"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="bg-gray-800 text-white p-4 rounded-lg"
                />
              </View>

              <View className="gap-2">
                <Text className="text-gray-400 text-xl">Password</Text>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                  placeholderTextColor="#666"
                  secureTextEntry
                  className="bg-gray-800 text-white p-4 rounded-lg"
                />
              </View>
            </View>

            <Pressable
              onPress={signInWithEmail}
              className="bg-white p-4 rounded-lg mt-6"
            >
              <Text className="text-black font-bold text-center text-lg">
                Sign In
              </Text>
            </Pressable>

            <View className="flex-row justify-center mt-4">
              <Text className="text-gray-400">Don't have an account? </Text>
              <Link href="/signup" className="text-white font-semibold">
                Create one
              </Link>
            </View>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
