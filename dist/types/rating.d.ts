export interface IRatingSchema {
    userId: string;
    transactionId: string;
    targetId: string;
    targetType: string;
    score: number;
    comment?: string;
    isActive: boolean;
}
export interface IRating extends IRatingSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface IRatingResponse {
    averageRating?: number;
    totalRatings?: number;
    ratings: IRating[];
}
interface ISingleRatingResponse {
    rating: IRating;
}
interface APIRatingErrorResponse {
    error: string;
}
export interface APIRatingSuccessResponse<T = IRatingResponse | ISingleRatingResponse> {
    message: string;
    data: T;
}
export type APIRatingResponse = APIRatingSuccessResponse<IRatingResponse> | APIRatingSuccessResponse<ISingleRatingResponse> | APIRatingErrorResponse;
export interface APICreateRatingRequest {
    ratings: IRating;
}
export interface APIUpdateRatingRequest {
    rating: Partial<IRating>;
}
export {};
