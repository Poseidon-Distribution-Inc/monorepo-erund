export interface ISubscriptionSchema {
    // Stripe subscription fields
    subscriptionId?: string;     // Stripe subscription id
    customerId?: string;         // Stripe customer id
    paymentMethodId?: string;    // Payment method ID from Stripe
    description?: string;        // Description provided
    latestInvoice?: string;      // Latest invoice id
    quantity?: number;           // Subscription quantity
    amount?: number;             // Amount in dollars (converted from cents)
    currency?: string;           // Currency code
    interval?: string;           // Billing interval (month/year)
    intervalCount?: number;      // Interval count
    productId?: string;          // Product id
    startDate?: Date;            // Subscription start date
    status?: string;             // Subscription status
    user?: string;               // User reference ID
    
    // Legacy fields
    subscriberId?: string;       // Legacy field for compatibility
    postId?: string;             // Legacy field for compatibility
    isActive: boolean;           // Whether subscription is active
    cancelledAt?: Date;          // When subscription was cancelled
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

export type APISubscriptionResponse =
    | APISubscriptionSuccessResponse
    | APISubscriptionErrorResponse;

export interface APICreateSubscriptionRequest {
    subscriptions: ISubscription;
}

export interface APIUpdateSubscriptionRequest {
    subscription: Partial<ISubscription>;
}
