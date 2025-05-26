export type TransactionStatus = "held" | "pending" | "processing" | "completed" | "failed" | "disputed" | "refunded" | "cancelled";

export type TransactionType = "payment" | "transfer" | "refund" | "fee" | "payout";

export interface ITransactionSchema {
    // Basic transaction details
    userId: string;            // User who initiated or is involved in the transaction
    amount: number;            // Transaction amount
    currency: string;          // Currency code (e.g., 'usd')
    transactionType: TransactionType; // Type of transaction
    status: TransactionStatus; // Current status of the transaction
    description: string;       // Human-readable description
    
    // Related entities
    errandId?: string;         // Related errand if applicable
    paymentId?: string;        // Related payment if this transaction is part of a payment flow
    payorId?: string;          // User making the payment (if applicable)
    payeeId?: string;          // User receiving the payment (if applicable)
    
    // Fee information
    platformFee?: number;      // Platform fee amount if applicable
    feePercentage?: number;    // Percentage used to calculate fee
    
    // Stripe-related fields
    stripePaymentIntentId?: string;  // Stripe payment intent ID
    stripeTransferId?: string;       // Stripe transfer ID
    stripeRefundId?: string;         // Stripe refund ID
    stripeChargeId?: string;         // Stripe charge ID
    
    // Timestamps for different stages
    processedAt?: Date;        // When the transaction was processed
    completedAt?: Date;        // When the transaction was completed
    failedAt?: Date;           // When the transaction failed (if applicable)
    disputedAt?: Date;         // When the transaction was disputed
    resolvedAt?: Date;         // When a dispute was resolved
    
    // Escrow-related fields
    escrowHoldPeriodDays?: number;   // Number of days to hold in escrow
    autoReleaseDate?: Date;          // Date when funds will auto-release from escrow
    
    // Additional info
    metadata?: Record<string, any>;  // Additional metadata
    notes?: string;                  // Internal notes
    isActive: boolean;               // Whether the transaction is active
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
    data: ITransaction | ITransaction[];
}

export type APITransactionResponse =
    | APITransactionSuccessResponse
    | APITransactionErrorResponse;

// API Request types
export interface APICreateTransactionRequest {
    transaction: Omit<ITransactionSchema, 'status' | 'isActive'>;
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
