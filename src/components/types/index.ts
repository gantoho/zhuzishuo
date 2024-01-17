interface resourceType {
  type: string,
  urls?: string[],
}

interface userType {
  name: string,
  avatar: string,
  time: string | Date,
  comment?: string,
}

interface likeAndCommentType {
  count: number,
  list: userType[]
}

export interface BlogProps {
  id: string | number,
  name: string,
  avatar: string,
  text: string,
  resource: resourceType[],
  posted: string | Date,
  like: likeAndCommentType,
  comment: likeAndCommentType
}
