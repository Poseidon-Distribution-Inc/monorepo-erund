export type TransactionStatus = "held" | "pending" | "processing" | "completed" | "failed" | "disputed" | "refunded" | "cancelled";
export type TransactionType = "payment" | "transfer" | "refund" | "fee" | "payout";
export type PaymentType = "bidded" | "fixed";
export interface ITransactionSchema {
    postId: string;
    postType: PaymentType;
    bidId: string;
    posterId: string;
    bidderId?: string;
    runnerId?: string;
    paymentId?: string;
    ratingId?: string;
    chatRoomId?: string;
    historyId?: string;
    disputeId?: string;
}
export interface ITransaction extends ITransactionSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APITransactionErrorResponse {
    error: string;
    code?: string;
}
interface APITransactionSuccessResponse {
    message: string;
    data?: ITransaction | ITransaction[];
}
export type APITransactionResponse = APITransactionSuccessResponse | APITransactionErrorResponse;
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
export interface APICaptureEscrowRequest {
    errandId: string;
    payeeId: string;
    amount: number;
    currency?: string;
    description: string;
    escrowHoldPeriodDays?: number;
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
    splitRatio?: number;
    notes?: string;
}
export {};
