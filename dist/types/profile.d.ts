type Certification = string | {
    name: string;
    number: string;
    issuer: string;
    issueDate: string;
    expiryDate: string;
};
export interface IProfileSchema {
    userId: string;
    name: string;
    email: string;
    contactNum?: string;
    address?: string;
    bio?: string;
    specialties?: string[];
    certificationsAndLicenses?: Certification[];
    equipmentTypes?: string[];
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
    data: IProfile | IProfile[];
}
export type APIProfileResponse = APIProfileSuccessResponse | APIProfileErrorResponse;
export interface APICreateProfileRequest {
    profiles: IProfile;
}
export interface APIUpdateProfileRequest {
    profile: Partial<IProfile>;
}
export {};
