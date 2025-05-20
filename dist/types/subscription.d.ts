export interface ISubscriptionSchema {
    subscriptionId?: string;
    customerId?: string;
    paymentMethodId?: string;
    description?: string;
    latestInvoice?: string;
    quantity?: number;
    amount?: number;
    currency?: string;
    interval?: string;
    intervalCount?: number;
    productId?: string;
    startDate?: Date;
    status?: string;
    user?: string;
    subscriberId?: string;
    postId?: string;
    isActive: boolean;
    cancelledAt?: Date;
    subscriptionEndDate?: Date;
}
export interface ISubscription extends ISubscriptionSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APISubscriptionErrorResponse {
    error: string;
}
interface APISubscriptionSuccessResponse {
    message: string;
    data: ISubscription | ISubscription[];
}
export type APISubscriptionResponse = APISubscriptionSuccessResponse | APISubscriptionErrorResponse;
export interface APICreateSubscriptionRequest {
    subscriptions: ISubscription;
}
export interface APIUpdateSubscriptionRequest {
    subscription: Partial<ISubscription>;
}
export {};
