export interface IRatingSchema {
    userId: string;
    transactionId: string;
    targetId: string;
    targetType: string;
    score: number;
    comment?: string;
    reviewer?: IReviewer;
    isActive: boolean;
}
export interface IRating extends IRatingSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface IReviewer {
    firstName: string;
    lastName: string;
    photoUrl: string;
}
interface IUserProfile {
    firstName?: string;
    lastName?: string;
    photoUrl?: string | null;
    totalTasks?: number;
    totalClients?: number;
}
export interface IRatingResponse {
    averageRating?: number;
    totalRatings?: number;
    ratingCounts?: Record<number, number>;
    userProfile?: IUserProfile;
    ratings?: IRating[]; 
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
