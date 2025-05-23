export interface IBankAccountSchema {
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
    accountType: "Personal" | "Business";
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    phoneNumber: string;
    businessName: string;
    businessType: "Individual" | "Company" | "Nonprofit" | "Government";
    businessMCC: string;
    businessTaxId: string;
    businessTaxIdType: "EIN" | "SSN";
    card: string | ICardSchema | null;
    bankAccount: string | IBankAccountSchema | null;
}
export interface IStripeAccount extends IStripeFullAccountSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
