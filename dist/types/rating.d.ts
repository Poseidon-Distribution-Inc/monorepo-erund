export interface IRatingSchema {
    userId: string;
    postId: string;
    ratingScore: number;
    commentId: string;
    isActive: boolean;
}
export interface IRating extends IRatingSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIRatingErrorResponse {
    error: string;
}
interface APIRatingSuccessResponse {
    message: string;
    data: IRating | IRating[];
}
export type APIRatingResponse = APIRatingSuccessResponse | APIRatingErrorResponse;
export interface APICreateRatingRequest {
    ratings: IRating;
}
export interface APIUpdateRatingRequest {
    rating: Partial<IRating>;
}
export {};
