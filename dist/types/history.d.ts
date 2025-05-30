export interface IHistorySchema {
    id: string;
    initalPay?: boolean;
    fullPay?: boolean;
    errandBidAccepted?: boolean;
    createdPostDate?: Date;
    errandAccepted?: boolean;
    errandStarted?: boolean;
    errandFinished?: boolean;
    errandFinishedConfirm?: boolean;
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
