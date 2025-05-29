export interface IProfileSchema {
    userId: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    postalCode?: string;
    countryCode?: string;
    skills?: string[];
    bio?: string;
    isActive: boolean;
}
export interface IProfile extends IProfileSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIProfileErrorResponse {
    error: string;
}
interface APIProfileSuccessResponse {
    message: string;
    data?: IProfile | IProfile[];
}
export type APIProfileResponse =
    | APIProfileSuccessResponse
    | APIProfileErrorResponse;
export interface APICreateProfileRequest {
    profiles: IProfile;
}
export interface APIUpdateProfileRequest {
    profile: Partial<IProfile>;
}
export {};
