import { Vehicle } from "./profile";
import { IBidder } from "./bidding";

interface GeoTag {
    latitude: number;
    longitude: number;
    address?: string;
}

type TransactionStatus =
    | 'awaiting_match'
    | 'matched'
    | 'processing'
    | 'processing_payment'
    | 'service_completed'
    | 'service_completed_accepted'
    | 'service_completed_paid'
    | 'transaction_completed'
    | 'failed'
    | 'disputed'
    | 'refunded'
    | 'released'
    | 'resolved_split'
    | 'cancelled'
    | 'expired'
    | 'first_post'
    | 'dummy_post';
type TransactionType = 'payment' | 'transfer' | 'refund' | 'fee' | 'payout';

type PostType = 'bid' | 'take';
export interface IPostSchema {
    transactionId?: string;
    postType: PostType;
    posterId: string;
    posterName?: string;
    posterPhotoUrl?: string;
    choreType: string;
    otherChoreType: string;
    description: string;
    quantify: string;
    quantifyValue: string;
    rate: number;
    note: string;
    pickupLocation: {
        address: string;
        latitude?: number;
        longitude?: number;
        city?: string;
        district?: string;
        streetNumber?: string;
        street?: string;
        region?: string;
        subregion?: string;
        country?: string;
        postalCode?: string;
        name?: string;
        isoCountryCode?: string;
        timezone?: string;
        formattedAddress?: string;
    };
    dropOffLocation?: {
        address: string;
        latitude?: number;
        longitude?: number;
        city?: string;
        district?: string;
        streetNumber?: string;
        street?: string;
        region?: string;
        subregion?: string;
        country?: string;
        postalCode?: string;
        name?: string;
        isoCountryCode?: string;
        timezone?: string;
        formattedAddress?: string;
    };
    dateCompleted: string;
    receiverName: string;
    receiverContact: string;
    volume: string;
    area: string;
    mass: string;
    startDateTime: string;
    endDateTime: string;
    duration?: string;
    status: TransactionStatus;
    runnerComplete: boolean;
    taskerVerified: boolean;
    photos?: {
        fileId: string;
        publicLink: string;
    }[];
    completionProofPhotos?: {
        fileId: string;
        publicLink: string;
    }[];
    location?: {
        type: string;
        coordinates: [number, number]; // [longitude, latitude]
    };
    myDistance?: number;
    runnerFee?: number;
    stripePaymentIntentId?: string;
    invoiceUrl?: string,
    invoiceStatus?: string,
    runnerId?: string;
    runnerName?: string;
    runnerPhotoUrl?: string;
    orderNum?: string;
    referenceNum?: string;
    isActive: boolean;
    progress?:
        | 'in_transit'
        | 'arrived'
        | 'picked_up'
        | 'delivery_in_progress'
        | 'delivered'
        | null;
    runnerCurrentLocation?: {
        type: string;
        coordinates: [number, number]; // [longitude, latitude]
    };
    runnerPath?: IPoint[]; // Melvyn Added this
    previousRunners?: {
        runnerId: string;
        removedAt: Date;
        reason: string;
    }[];
    discountCode?: string;
    discountAmount?: number;
    runnerVehicle?: Vehicle | "walking";
    bids?: IBidder[];
    views?: number;
}
export interface IPost extends IPostSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIPostErrorResponse {
    error: string;
}
interface APIPostSuccessResponse {
    message: string;
    data: IPost | IPost[];
}
export type APIPostResponse = APIPostSuccessResponse | APIPostErrorResponse;
export interface APICreatePostRequest {
    posts: IPost;
}
export interface APIUpdatePostRequest {
    post: Partial<IPost>;
}

// Melvyn Added this
export interface IPoint {
    latitude: number;
    longitude: number;
    ts?: string; // ISO timestamp
}

export {};
