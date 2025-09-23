type TransactionStatus = 'awaiting_match' | 'matched' | 'processing' | 'processing_payment' | 'service_completed' | 'service_completed_accepted' | 'service_completed_paid' | 'transaction_completed' | 'failed' | 'disputed' | 'refunded' | 'released' | 'resolved_split' | 'cancelled';
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
        coordinates: [number, number];
    };
    myDistance?: number;
    runnerFee?: number;
    stripePaymentIntentId?: string;
    runnerId?: string;
    runnerName?: string;
    runnerPhotoUrl?: string;
    orderNum?: string;
    referenceNum?: string;
    isActive: boolean;
    progress?: 'in_transit' | 'arrived' | 'picked_up' | 'delivery_in_progress' | 'delivered' | null;
    runnerCurrentlocation?: {
        type: string;
        coordinates: [number, number];
    };
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
export {};
