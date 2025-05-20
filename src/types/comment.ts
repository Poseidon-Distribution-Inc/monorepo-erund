export interface ICommentSchema {
  comment: string;
  authorId: string;
  postId: string;
  isActive: boolean;
}

export interface IComment extends ICommentSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface APICommentErrorResponse {
  error: string;
}

interface APICommentSuccessResponse {
  message: string;
  data: IComment | IComment[];
}

export type APICommentResponse =
  | APICommentSuccessResponse
  | APICommentErrorResponse;

export interface APICreateCommentRequest {
  comments: IComment;
}

export interface APIUpdateCommentRequest {
  comment: Partial<IComment>;
}
