export interface IBankAccount {
    type: string;
    accountHolderName: string;
    accountNumber: string;
    routingNumber: string;
    country: string;
    currency: string;
}
export interface ICard {
    type: string;
    cardNumber: string;
    expMonth: number;
    expYear: number;
    cvc: string;
    country: string;
    currency: string;
}
export interface IStripeBasic {
    id: string;
    userId: string;
    stripeAccountId: string;
    firstName: string;
    lastName: string;
    email: string;
}
export interface IStripeFullAccountSchema extends IStripeBasic {
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
    card: ICard | null;
    bankAccount: IBankAccount | null;
}
export interface IStripeAccount extends IStripeFullAccountSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
