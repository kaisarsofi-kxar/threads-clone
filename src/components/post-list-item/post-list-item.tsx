import { Post } from "@/types/posts";
import { getRelativeTimeFromNow } from "@/utils/date-time/format-date";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

export function PostListItem({ post }: { post: Post }) {
  return (
    <Pressable className="flex-row p-4 border-b border-gray-800/70">
      <View className="mr-3">
        <Image
          source={{ uri: post.user.image }}
          className="w-12 h-12 rounded-full"
        />
      </View>

      <View className="flex-1">
        <View className="flex-row items-center mb-1">
          <Text className="font-bold text-white mr-2">
            {post.user.username}
          </Text>

          <Text className="text-gray-500">
            {getRelativeTimeFromNow(post.createdAt)}
          </Text>
        </View>

        <Text className="text-white text-base mb-2">{post.content}</Text>

        <View className="flex-row gap-6 mt-2">
          <Pressable className="flex-row items-center">
            <Feather name="heart" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-1">0</Text>
          </Pressable>
          <Pressable className="flex-row items-center">
            <Feather name="message-circle" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-1">{post.replies.length}</Text>
          </Pressable>
          <Pressable className="flex-row items-center">
            <MaterialCommunityIcons
              name="repeat-variant"
              size={20}
              color="#d1d5db"
            />
            <Text className="text-gray-300 ml-1">0</Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Ionicons name="paper-plane-outline" size={20} color="#d1d5db" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}
