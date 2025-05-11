import { PostListItem } from "@/components/post-list-item";
import { dummyPosts } from "@/dummy-data";
import { FlatList } from "react-native";

export function Home() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={dummyPosts}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
