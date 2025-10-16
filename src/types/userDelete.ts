export interface IUserDeleteSchema {
    userId: string,
    email?: string,
    deleteOption: 'account_only' | 'delete_all',
    reasons: string[],
    remarks?: string;
    deletedAt?: Date;
}
export interface IUserDelete extends IUserDeleteSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIUserDeleteErrorResponse {
    error: string;
}
interface APIUserDeleteSuccessResponse {
    message: string;
    data?: IUserDelete | IUserDelete[];
}
export type APIUserDeleteResponse = 
    | APIUserDeleteSuccessResponse
    | APIUserDeleteErrorResponse;
export interface APICreateUserDeleteRequest {
    userDeletes: IUserDelete;
}
export interface APIUpdateUserDeleteRequest {
    userDelete: Partial<IUserDelete>;
}
export {};
