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
    role: 'user' | 'admin' | 'runner';
    photoUrl?: string | null;
    vehicle: {
        type: {
            color: {
                type: string;
                default: null;
            };
            type: {
                type: string;
                default: null;
            };
            year: {
                type: number;
                default: null;
            };
            vehicleNum: {
                type: string;
                default: null;
            };
            vehicleUrl: {
                type: [
                    {
                        fileId: string;
                        publicLink: string;
                    }
                ];
                default: [];
            };
        };
        required: false;
    };
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
export type APIProfileResponse = APIProfileSuccessResponse | APIProfileErrorResponse;
export interface APICreateProfileRequest {
    profiles: IProfile;
}
export interface APIUpdateProfileRequest {
    profile: Partial<IProfile>;
}
export {};
