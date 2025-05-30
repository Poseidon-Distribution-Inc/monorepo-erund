// Dispute schema
export interface IDisputeSchema {  
    postId:string;              // Unique identifier
    content: string;           // Dispute content/description
    resolution?: string;        // Resolution of the dispute
    adminComment?: string;     // Administrator's comment on the dispute
    resolveDate: Date;        // Date when the dispute was resolved
    isActive:boolean;         // When the record was last updated
}

export interface IDispute extends IDisputeSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

// API Response types
interface APIDisputeErrorResponse {
    error: string;
    code?: string;
}

interface APIDisputeSuccessResponse {
    message: string;
    data?: IDispute | IDispute[];
}

export type APIDisputeResponse =
    | APIDisputeSuccessResponse
    | APIDisputeErrorResponse;

// API Request types
export interface APICreateDisputeRequest {
    dispute: Omit<IDisputeSchema, 'id' | 'resolveDate' | 'createdAt' | 'updatedAt'>;
}

export interface APIUpdateDisputeRequest {
    dispute: Partial<IDisputeSchema>;
}
