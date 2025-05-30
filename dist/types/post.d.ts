export interface IPostSchema {
    transactionId?: string;
    posterId: string;
    choreType: string;
    otherChoreType: string;
    description: string;
    quantify: string;
    quantifyValue: string;
    rate: number;
    note: string;
    pickupLocation: {
        address: string;
        latitude: number;
        longitude: number;
    };
    dropOffLocation?: {
        address: string;
        latitude: number;
        longitude: number;
    };
    dateCompleted: string;
    receiverName: string;
    receiverContact: string;
    volume: string;
    area: string;
    mass: string;
    startDateTime: string;
    endDateTime: string;
    status: string;
}
export interface IPost extends IPostSchema {
    id: string;
    runnerId?: string;
    orderNum?: string;
    referenceNum?: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
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
