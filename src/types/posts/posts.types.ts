import { User } from "../user";

export type Post = {
  id: string;
  content: string;
  createdAt: string;
  userId: string;
  user: User;
  parentId: string | null;
  parent: Post | null;
  replies: Post[];
};
