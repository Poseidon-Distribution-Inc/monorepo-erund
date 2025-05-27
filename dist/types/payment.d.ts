export type paymentStatus = "pending" | "held" | "completed" | "disputed" | "refunded" | "failed" | "processing" | "cancelled";
export interface IPaymentSchema {
    payor: string;
    payee: string;
    errandId: string;
    amount: number;
    payeeAmount: number;
    platformFee: number;
    currency: string;
    status: paymentStatus;
    stripePaymentIntentId?: string;
    stripeTransferId?: string;
    heldAt?: Date;
    completedAt?: Date;
    disputeReason?: string;
    disputeFiledBy?: string;
    disputedAt?: Date;
    disputeResolvedAt?: Date;
    autoReleaseDate?: Date;
    isActive: boolean;
}
export interface IPayment extends IPaymentSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
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
    payment: Omit<IPaymentSchema, 'status' | 'isActive' | 'heldAt' | 'completedAt' | 'disputedAt' | 'disputeResolvedAt' | 'autoReleaseDate'>;
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
