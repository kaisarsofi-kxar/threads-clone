import { supabase } from "@/lib/supabase/supabase";
import { Link, router } from "expo-router";
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

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function signUpWithEmail() {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Please enter all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    if (session) {
      router.replace("/");
    }
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
              <Text className="text-white text-3xl font-extrabold tracking-widest">
                Create an Account
              </Text>
              <Text className="text-gray-400 text-lg">
                Sign up to get started
              </Text>
            </View>

            <View className="gap-4">
              <View className="gap-2">
                <Text className="text-gray-400 text-xl">Name</Text>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your name"
                  placeholderTextColor="#666"
                  autoCapitalize="words"
                  className="bg-gray-800 text-white p-4 rounded-lg"
                />
              </View>

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

              <View className="gap-2">
                <Text className="text-gray-400 text-xl">Confirm Password</Text>
                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Confirm your password"
                  placeholderTextColor="#666"
                  secureTextEntry
                  className="bg-gray-800 text-white p-4 rounded-lg"
                />
              </View>
            </View>

            <Pressable
              onPress={signUpWithEmail}
              className="bg-white p-4 rounded-lg mt-6"
            >
              <Text className="text-black font-bold text-center text-lg">
                Sign Up
              </Text>
            </Pressable>

            <View className="flex-row justify-center mt-4">
              <Text className="text-gray-400">Already have an account? </Text>
              <Link href="/login" className="text-white font-semibold">
                Sign in
              </Link>
            </View>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
