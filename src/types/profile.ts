interface Vehicle {
    vehicleId: number | null;
    make?: string | null;
    model?: string | null;
    color?: string | null;
    type?: 'sedan' | 'suv' | 'hatchback' | 'pickup' | 'van' | 'motorcycle' | 'truck' | 'bus' | 'convertible' | 'wagon' | 'coupe' | 'other' | null;
    year?: number | null;
    vehicleNum?: string | null;
    vehicleUrl: Array<{
        fileId: string;
        publicLink: string;
    }>;
}

export interface IProfileSchema {
    userId: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    isContactPublic?: boolean;
    postalCode?: string;
    countryCode?: string;
    skills?: string[];
    bio?: string;
    isActive: boolean;
    role: 'user' | 'admin' | 'runner'
    photoUrl?: string | null;
    vehicle: Vehicle[] | null;
    address: {
        country?: string | null,
        state?: string | null,
        city?: string | null,
        postalCode?: string | null,
    }
    expoPushToken?: string[] | null;
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
