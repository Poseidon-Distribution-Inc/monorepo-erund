export interface IMessageSchema {
    transactionId: string;
    message: string;
    authorId: string;
    recipientId: string;
    isSeen: boolean;
    isActive: boolean;
    isEdited: boolean;
}
export interface IMessage extends IMessageSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
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
