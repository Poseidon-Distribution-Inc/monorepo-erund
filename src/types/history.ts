// History schema
export interface IHistorySchema {                     // Unique identifier
    initialPay?: Date;             // Whether initial payment was made
    fullPay?: Date;               // Whether full payment was made
    errandBidAccepted?: Date;     // Whether a bid was accepted
    createdPostDate?: Date;       // When the post was created
    errandAccepted?: Date;        // Whether the errand was accepted
    errandStarted?: Date;         // Whether the errand has started
    errandFinished?: Date;        // Whether the errand is finished
    errandFinishedConfirm?: Date; // Whether the errand completion was confirmed
    isActive:boolean;
}

export interface IHistory extends IHistorySchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

// API Response types
interface APIHistoryErrorResponse {
    error: string;
    code?: string;
}

interface APIHistorySuccessResponse {
    message: string;
    data?: IHistory | IHistory[];
}

export type APIHistoryResponse =
    | APIHistorySuccessResponse
    | APIHistoryErrorResponse;

// API Request types
export interface APICreateHistoryRequest {
    history: Omit<IHistorySchema, 'id'>;
}

export interface APIUpdateHistoryRequest {
    history: Partial<IHistorySchema>;
}
