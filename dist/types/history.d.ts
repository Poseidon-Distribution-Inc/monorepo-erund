export interface IHistorySchema {
    initialPay?: Date;
    fullPay?: Date;
    errandBidAccepted?: Date;
    createdPostDate?: Date;
    errandAccepted?: Date;
    errandStarted?: Date;
    errandFinished?: Date;
    errandFinishedConfirm?: Date;
}
export interface IHistory extends IHistorySchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIHistoryErrorResponse {
    error: string;
    code?: string;
}
interface APIHistorySuccessResponse {
    message: string;
    data?: IHistory | IHistory[];
}
export type APIHistoryResponse = APIHistorySuccessResponse | APIHistoryErrorResponse;
export interface APICreateHistoryRequest {
    history: Omit<IHistorySchema, 'id'>;
}
export interface APIUpdateHistoryRequest {
    history: Partial<IHistorySchema>;
}
export {};
