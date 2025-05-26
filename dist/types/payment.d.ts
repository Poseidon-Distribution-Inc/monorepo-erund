export type paymentStatus = "pending" | "held" | "completed" | "disputed" | "refunded" | "failed";
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
    payments: IPayment;
}
export interface APIUpdatePaymentRequest {
    payment: Partial<IPayment>;
}
export {};
