// History schema
export interface IHistorySchema {
    id: string;                      // Unique identifier
    initalPay?: boolean;             // Whether initial payment was made
    fullPay?: boolean;               // Whether full payment was made
    errandBidAccepted?: boolean;     // Whether a bid was accepted
    createdPostDate?: Date;          // When the post was created
    errandAccepted?: boolean;        // Whether the errand was accepted
    errandStarted?: boolean;         // Whether the errand has started
    errandFinished?: boolean;        // Whether the errand is finished
    errandFinishedConfirm?: boolean; // Whether the errand completion was confirmed
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
