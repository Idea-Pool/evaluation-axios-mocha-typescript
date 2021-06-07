export interface postComments {
  userId: number,
  body: string,
  postId: number
}

export interface ErrorResponse {
  message: string,
  success: boolean
}
