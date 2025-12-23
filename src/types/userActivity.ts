export type UserActivityType = 
'open_app' |
'login' |
'logout' |
'update_profile' |
'create_post' |
'browse_home' |
'book_runner' |
'bid' |
'complete_errand' |
'send_message' |
'dispute_errand';

export interface IUserActivityLogSchema {
    type: UserActivityType;
    timestamp: Date;
    details?: string;
}

export interface IUserActivitySchema {
    userId: string;
    role: 'user' | 'runner';
    activityLog: IUserActivityLogSchema[];
    lastActiveAt: Date;
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
export type APIUserActivityResponse = 
    | APIUserActivitySuccessResponse
    | APIUserActivityErrorResponse;
export interface APICreateUserActivityRequest {
    userActivities: IUserActivity;
}
export interface APIUpdateUserActivityRequest {
    userActivity: Partial<IUserActivity>;
}
export {};