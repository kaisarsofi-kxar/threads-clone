import { PostListItem } from "@/components/post-list-item";
import { dummyPosts } from "@/dummy-data";
import { Link } from "expo-router";
import { FlatList } from "react-native";

export function Home() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={dummyPosts}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <Link href="/new" className="text-blue-500 p-4 text-center text-3xl">
          New Post
        </Link>
      )}
    />
  );
}
