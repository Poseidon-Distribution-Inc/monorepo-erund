export type TransactionStatus = "awaiting_match" | "matched" | "processing" | "processing_payment" | "service_completed" | "service_completed_accepted" | "service_completed_paid" | "transaction_completed" | "failed" | "disputed" | "refunded" | "released" | "resolved_split" | "cancelled" | "expired";
export type TransactionType = "payment" | "transfer" | "refund" | "fee" | "payout";
type PostType = "bid" | "take";
export interface ITransactionSchema {
    referenceNum?: string;
    postId: string;
    postType: PostType;
    bidIds?: string[];
    posterId: string;
    bidderIds?: string[];
    runnerId?: string;
    paymentId?: string;
    ratingIds?: string[];
    chatRoomId?: string;
    historyId?: string;
    disputeId?: string;
    status: string;
    baseFeeAmount: number;
    platformFeePercentage: number;
    platforFixedFee: number;
    platformFeeAmount: number;
    stripeFixedFee: number;
    stripeFeePercentage: number;
    stripeFeeAmount: number;
    taxFeePercentage: number;
    taxFeeAmount: number;
    payeeAmount: number;
    tipAmount?: number;
    totalAmount: number;
    matchedAt?: Date;
    processingAt?: Date;
    currency?: string;
    serviceCompletedAt?: Date;
    transactionCompletedAt?: Date;
    failedAt?: Date;
    disputedAt?: Date;
    refundedAt?: Date;
    cancelledAt?: Date;
    releaseType?: 'manual' | 'auto';
    releaseAt?: Date;
    stripePaymentIntentId?: string;
    stripeTipPaymentIntentId?: string;
    stripeTransferId?: string;
    stripeInvoiceId?: string;
    stripeInvoicePaymentIntentId?: string;
    invoiceUrl?: string;
    invoiceStatus?: string;
    isActive?: boolean;
    note?: string;
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
