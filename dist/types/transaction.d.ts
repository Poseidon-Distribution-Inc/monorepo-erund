export type TransactionStatus = "held" | "pending" | "processing" | "completed" | "failed" | "disputed" | "refunded" | "cancelled";
export type TransactionType = "payment" | "transfer" | "refund" | "fee" | "payout";
export interface ITransactionSchema {
    postId: string;
    biddingIds: [string];
    winningBidId: string;
    transactionId: string;
    amount: number;
    currency: string;
    transactionType: TransactionType;
    status: TransactionStatus;
    description: string;
    errandId?: string;
    paymentId?: string;
    payorId?: string;
    payeeId?: string;
    platformFee?: number;
    feePercentage?: number;
    stripeSessionId?: string;
    stripePaymentIntentId?: string;
    stripeTransferId?: string;
    stripeRefundId?: string;
    stripeChargeId?: string;
    processedAt?: Date;
    completedAt?: Date;
    failedAt?: Date;
    disputedAt?: Date;
    resolvedAt?: Date;
    heldAt?: Date;
    escrowHoldPeriodDays?: number;
    autoReleaseDate?: Date;
    metadata?: Record<string, any>;
    notes?: string;
    isActive: boolean;
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
    data: ITransaction | ITransaction[];
}
export type APITransactionResponse = APITransactionSuccessResponse | APITransactionErrorResponse;
export interface APICreateTransactionRequest {
    transaction: Omit<ITransactionSchema, 'status' | 'isActive' | 'transactionId'>;
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
