export interface IPostSchema {
    type: string;
    posterId: string;
    choreType: string;
    otherChoreType: string;
    description: string;
    urgencyTag: string;
    quantify: string;
    quantifyValue: string;
    rate: number;
    note: string;
    pickupLocation: string;
    dropOffLocation: string;
    pickupDate: string;
    dateCompleted: string;
    receiverName: string;
    receiverContact: string;
    volume: string;
    area: string;
    mass: string;
    urgencyTime: string;
    urgencyDate: string;
    startTime: string;
    endTime: string;
    status: string;
}

export interface IPost extends IPostSchema {
    _id: string;
    runnerId: string;
    orderNum: string;
    referenceNum: string;
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
