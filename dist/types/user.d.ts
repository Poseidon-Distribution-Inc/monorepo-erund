type AuthProvider = "local" | "google";
interface IBaseUserSchema {
    id: string;
    name?: string;
    email: string;
    address?: string;
    phoneNumber?: string;
    role?: string;
    authProvider: AuthProvider;
    createdAt: Date;
    updatedAt: Date;
    stripeCustomerId?: string;
    subscriptionId?: string;
    subscriptionType?: string;
    subscriptionStatus?: "active" | "cancelled" | "expired" | "none";
    subscriptionEndDate?: Date;
    lastSubscriptionUpdate?: Date;
    isActive: boolean;
}
export interface ILocalUserSchema extends IBaseUserSchema {
    password: string;
}
export interface ILocalUser extends ILocalUserSchema {
}
export interface IGoogleUserSchema extends IBaseUserSchema {
    googleId: string;
    name: string;
    profilePicUrl: string;
}
export interface IGoogleUser extends IGoogleUserSchema {
}
export type IUserSchema = ILocalUserSchema | IGoogleUserSchema;
export type IUser = ILocalUser | IGoogleUser;
export interface APIUserLoginRequest {
    email: string;
    password: string;
}
interface APIGetUserErrorResponse {
    error: string;
}
interface APIGetUserSuccessResponse {
    message: string;
    data?: IUser | IUser[];
}
interface APIUserLoginSuccessResponse {
    message: string;
    data: IUser;
    token: string;
}
export interface APIGetUserRequest {
    role?: string;
    email?: string;
    userId?: string;
    status?: string;
    isActive?: boolean;
    token?: string;
    currentPassword?: string;
    newPassword?: string;
}
export type APILoginResponse = APIUserLoginSuccessResponse | APIGetUserErrorResponse;
export type APIUserResponse = APIGetUserSuccessResponse | APIGetUserErrorResponse;
export {};
