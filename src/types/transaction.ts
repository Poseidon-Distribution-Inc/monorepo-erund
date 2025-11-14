export type TransactionStatus =
    | 'awaiting_match'
    | 'matched'
    | 'processing'
    | 'processing_payment'
    | 'service_completed'
    | 'service_completed_accepted'
    | 'service_completed_paid'
    | 'transaction_completed'
    | 'failed'
    | 'disputed'
    | 'refunded'
    | 'released'
    | 'resolved_split'
    | 'cancelled';
export type TransactionType =
    | 'payment'
    | 'transfer'
    | 'refund'
    | 'fee'
    | 'payout';
type PostType = 'bid' | 'take';

export interface ITransactionSchema {
    referenceNum?: string;
    postId: string; // Related post ID
    postType: PostType; // Type of post
    bidIds?: string[]; // Related bid ID
    posterId: string; // ID of the poster, aka user/payer
    bidderIds?: string[]; // ID of the bidder
    runnerId?: string; // Alternative name for runner ID, aka service provider/payee
    paymentId?: string; // Related payment ID
    ratingIds?: string[]; // Related rating ID
    chatRoomId?: string; // Related chat room ID
    historyId?: string; // Related history ID
    disputeId?: string; // Related dispute ID
    status: string;

    //BASE
    baseFeeAmount: number;

    // PLATFORM
    platformFeePercentage: number;
    platforFixedFee: number;
    platformFeeAmount: number;

    //STRIPE
    stripeFixedFee: number;
    stripeFeePercentage: number;
    stripeFeeAmount: number;

    //TAX
    taxFeePercentage: number;
    taxFeeAmount: number;

    //PAYEE
    payeeAmount: number;
    tipAmount?: number;

    //TOTAL
    totalAmount: number;

    matchedAt?: Date; // Time when the transaction was matched
    processingAt?: Date;
    currency?: string; // Time when the transaction was processing
    serviceCompletedAt?: Date; // Time when the service was completed
    transactionCompletedAt?: Date; // Time when the transaction was completed
    failedAt?: Date; // Time when the transaction failed
    disputedAt?: Date; // Time when the transaction was disputed
    refundedAt?: Date; // Time when the transaction was refunded
    cancelledAt?: Date; // Time when the transaction was cancelled

    releaseType?: 'manual' | 'auto'; //manual by user or auto by system (after 7 days)
    releaseAt?: Date; // Time when the transaction will be released

    // Stripe payment details
    stripePaymentIntentId?: string;
    stripeTransferId?: string;
    stripeInvoiceId?: string;
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
