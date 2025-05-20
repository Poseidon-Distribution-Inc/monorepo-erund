export type paymentStatus = "paid" | "request_refund" | "refunded";
export interface IPaymentSchema {
    payor: string;
    payee: string;
    postId: string;
    subscriptionId: string;
    status: paymentStatus;
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
