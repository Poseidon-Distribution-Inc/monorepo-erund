export type paymentStatus = "pending" | "held" | "paid" | "transferred" | "completed" | "dispute_refunded" | "dispute_released" | "dispute_split" | "failed" | "processing" | "cancelled";
export interface IPaymentSchema {
    transactionId: string;
    referenceNum: string;
    stripePaymentIntentId: string;
    posterId: string;
    runnerId: string;
    currency: string;
    baseFeeAmount: number;
    platformFeePercentage: number;
    platformFixedFee: number;
    platformFeeAmount: number;
    stripeFixedFee: number;
    stripeFeePercentage: number;
    stripeFeeAmount: number;
    taxFeePercentage: number;
    taxFeeAmount: number;
    payeeAmount: number;
    tipAmount?: number;
    totalAmount: number;
    refundAmount: number;
    transferedAmount: number;
    payoutAmount: number;
    autoReleaseDate: Date;
    releaseAt?: Date;
    heldAt?: Date;
    resolvedAt?: Date;
    cancelledAt?: Date;
    status: paymentStatus;
    isActive: boolean;
    transactions?: ITransactions[];
}
export interface IPayment extends IPaymentSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface ITransactions {
    type: "charge" | "transfer" | "payout" | "refund" | "dispute";
    stripeId: string;
    amount: number;
    currency: string;
    status: "initiated" | "succeeded" | "failed" | "cancelled" | "expired";
    meta?: Record<string, any>;
    feeAmount?: number;
    createdAt?: Date | string;
}
interface APIPaymentErrorResponse {
    error: string;
}
interface APIPaymentSuccessResponse {
    message: string;
    data: IPayment | IPayment[];
}
export type APIPaymentResponse = APIPaymentSuccessResponse | APIPaymentErrorResponse;
export interface APICreatePaymentRequest {
    payment: Omit<IPaymentSchema, "status" | "isActive" | "heldAt" | "completedAt" | "disputedAt" | "disputeResolvedAt" | "autoReleaseDate">;
}
export interface APIUpdatePaymentRequest {
    payment: Partial<IPaymentSchema>;
}
export interface APIPaymentEscrowRequest {
    payor: string;
    payee: string;
    errandId: string;
    amount: number;
    currency?: string;
    description: string;
    escrowHoldPeriodDays?: number;
    metadata?: Record<string, any>;
}
export interface APIReleasePaymentRequest {
    paymentId: string;
    notes?: string;
}
export interface APIDisputePaymentRequest {
    paymentId: string;
    reason: string;
    disputeFiledBy: string;
    evidence?: string;
}
export interface APICancelPaymentRequest {
    paymentId: string;
    reason: string;
}
export {};
