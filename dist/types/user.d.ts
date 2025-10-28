type AuthProvider = 'local' | 'google';
interface IBaseUserSchema {
    id: string;
    email: string;
    authProvider: AuthProvider;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    isVerified: boolean;
    role: 'user' | 'admin' | 'superadmin' | 'platform' | 'advocates';
}
export interface ILocalUserSchema extends IBaseUserSchema {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    postalCode?: string;
    countryCode?: string;
    photoUrl?: string;
    generalLocation: string;
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
    data?: IUser;
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
