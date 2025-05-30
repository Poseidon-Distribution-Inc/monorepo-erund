import { IDisputeSchema, IDispute } from './dispute';
import { IHistorySchema, IHistory } from './history';

export type TransactionStatus = "held" | "pending" | "processing" | "completed" | "failed" | "disputed" | "refunded" | "cancelled";
export type TransactionType = "payment" | "transfer" | "refund" | "fee" | "payout";
export type PaymentType = "bidded" | "fixed";

export interface ITransactionSchema {
    transId: string;           // Transaction ID
    postId: string;            // Related post ID
    postType: PaymentType;     // Type of post
    bidId: string;             // Related bid ID
    posterId: string;          // ID of the poster
    bidderId?: string;         // ID of the bidder
    runnerId?: string;         // Alternative name for runner ID
    paymentId?: string;        // Related payment ID
    ratingId?: string;         // Related rating ID
    chatRoomId?: string;       // Related chat room ID
    historyId?: string;        // Related history ID
    disputeId?: string;        // Related dispute ID
    deletedAt: Date;   
}

export interface ITransaction extends ITransactionSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

// API Response types
interface APITransactionErrorResponse {
    error: string;
    code?: string;
}

interface APITransactionSuccessResponse {
    message: string;
    data?: ITransaction | ITransaction[];
}

export type APITransactionResponse =
    | APITransactionSuccessResponse
    | APITransactionErrorResponse;

// API Request types
export interface APICreateTransactionRequest {
    transaction: Omit<ITransactionSchema, 'status' | 'isActive' | 'transId'>;
}

export interface APIUpdateTransactionRequest {
    transaction: Partial<ITransactionSchema>;
}

export interface APIListTransactionsQuery {
    userId?: string;
    errandId?: string;
    transactionType?: TransactionType;
    status?: TransactionStatus;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
}

// Escrow-specific API request types
export interface APICaptureEscrowRequest {
    errandId: string;
    payeeId: string; // Service provider's user ID
    amount: number;
    currency?: string;
    description: string;
    escrowHoldPeriodDays?: number; // Optional override of default period (7 days)
    metadata?: Record<string, any>;
}

export interface APIReleaseEscrowRequest {
    transactionId: string;
    errandId: string;
    notes?: string;
}

export interface APIDisputeEscrowRequest {
    transactionId: string;
    errandId: string;
    reason: string;
    evidence?: string;
}

export interface APIResolveDisputeRequest {
    transactionId: string;
    resolution: 'release_to_payee' | 'refund_to_payor' | 'split';
    splitRatio?: number; // If resolution is 'split', percentage to payee (0-100)
    notes?: string;
}
