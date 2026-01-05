export type UserActivityType = 'open_app' | 'login' | 'logout' | 'update_profile' | 'create_post' | 'browse_home' | 'book_runner' | 'bid' | 'complete_errand' | 'dispute_errand' | 'view_post' | 'send_message';
export interface IUserActivitySchema {
    userId: string;
    role: 'user' | 'runner';
    activity: UserActivityType;
    details?: string;
}
export interface IUserActivity extends IUserActivitySchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIUserActivityErrorResponse {
    error: string;
}
interface APIUserActivitySuccessResponse {
    message: string;
    data?: IUserActivity | IUserActivity[];
}
export type APIUserActivityResponse = APIUserActivitySuccessResponse | APIUserActivityErrorResponse;
export interface APICreateUserActivityRequest {
    userActivities: IUserActivity;
}
export interface APIUpdateUserActivityRequest {
    userActivity: Partial<IUserActivity>;
}
export {};
