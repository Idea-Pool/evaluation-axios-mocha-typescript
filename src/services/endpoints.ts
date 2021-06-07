export const endpoints = {
  allPosts: '/posts',
  postById: (id: number | string): string => '/posts'+`/${id}`,
  comments: '/comments'
}