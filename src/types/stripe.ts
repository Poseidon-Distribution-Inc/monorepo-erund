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

//card for payout
export interface ICardSchema {
  id: string;
  object: "card";
  cardNumber: string;
  expMonth: number;
  expYear: number;
  country: string;
  currency: string;
}

//card for payment
export interface IPaymentCardSchema {
  id: string;
  object: "card";
  cardholderName: string;
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

  card: ICardSchema | null;
  bankAccount:  IBankAccountSchema | null;

  onboardingStatus: "Not Started" | "In Progress" | "Completed";
  onboardingLink: string | null;
}

export interface IStripeAccount extends IStripeFullAccountSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}


export interface APICreateStripeAccountRequest {
    stripe: IStripeBasicSchema;
}

export interface APICreateStripeAccountResponse {
    message: string;
    data: IStripeAccount;
}

export interface APIUpdateStripeAccountRequest {
    stripe: IStripeFullAccountSchema;
}

export interface APIUpdateStripeAccountResponse {
    message: string;
    data: IStripeAccount;
}

export interface APIGetStripeAccountRequest {
    stripeAccountId: string;
}

export interface APIGetStripeAccountResponse {
    message: string;
    data: IStripeAccount;
}