export type CommentGet = {
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: number,
  comment: string,
  date: string,
}

export type CommentsGet = CommentGet[];

export type CommentPost = {
  rating: number,
  comment: string,
}
