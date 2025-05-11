import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export function NewPost() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView ed className="p-4 flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
      >
        <Text className="text-white font-bold text-lg">username</Text>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="What is on your mind?"
          placeholderTextColor="gray"
          className="text-white text-lg "
          multiline
          numberOfLines={4}
        />
        <View className="mt-auto">
          <Pressable
            onPress={() => {}}
            className="bg-white p-3 px-6 self-end rounded-full"
          >
            <Text className="text-black font-bold">Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
