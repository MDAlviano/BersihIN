export interface Post {
  id: number;
  title: string;
  description: string;
  posted: string;
  user: string;
  upvotes: number;
  downvotes: number;
  commentsCount: number;
}

export interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}
