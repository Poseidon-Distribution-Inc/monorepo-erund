export interface IMessageSchema {
    transactionId: string;
    message: string;
    authorId: string;
    recipientId: string;
    isSeen: boolean;
    isActive: boolean;
    isEdited: boolean;
    hiddenFor: string[];
}
export interface IMessage extends IMessageSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IMessageThread {
    _id: string;
    lastMessage: string;
    lastMessageData: {
        _id: string;
        transactionId: string;
        message: string;
        authorId: string;
        recipientId: string;
        isActive: boolean;
        isSeen: boolean;
        isEdited: boolean;
        hiddenFor: string[];
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    messageCount: number;
    otherUser: {
        userId: string;
        firstName: string;
        lastName: string;
        photoUrl: string;
    };
}
interface APIMessageErrorResponse {
    error: string;
}
interface APIMessageSuccessResponse {
    message: string;
    data: IMessage | IMessage[];
}
export type APIMessageResponse = APIMessageSuccessResponse | APIMessageErrorResponse;
export interface APICreateMessageRequest {
    messages: IMessage;
}
export interface APIUpdateMessageRequest {
    message: Partial<IMessage>;
}
export {};
