export interface IBankAccountSchema {
    id: string;
    object: "bank_account";
    accountHolderName: string;
    accountNumber: string;
    routingNumber: string;
    firstName: string;
    lastName: string;
    accountHolderType: "individual" | "company";
    country: string;
    currency: string;
}
export interface ICardSchema {
    id: string;
    object: "card";
    cardNumber: string;
    expMonth: number;
    expYear: number;
    cvc: string;
    country: string;
    currency: string;
}
export interface IStripeBasicSchema {
    userId: string;
    stripeAccountId: string;
    firstName: string;
    lastName: string;
    email: string;
}
export interface IStripeFullAccountSchema extends IStripeBasicSchema {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    phoneNumber: string;
    businessName: string;
    businessType: "individual" | "company";
    businessMCC: string;
    businessTaxId: string;
    businessTaxIdType: "EIN" | "SSN";
    card: string | ICardSchema | null;
    bankAccount: string | IBankAccountSchema | null;
    onboardingStatus: "Not Started" | "In Progress" | "Completed";
    onboardingLink: string | null;
}
export interface IStripeAccount extends IStripeFullAccountSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
