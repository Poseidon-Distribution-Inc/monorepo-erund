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
  isDefault: boolean;
}

//card for payout
export interface IPayoutCardSchema {
  id: string;
  object: "card";
  cardHolderName: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  country: string;
  currency: string;
  isDefault: boolean;
}

//card for payment
export interface IPaymentCardSchema {
  id: string;
  object: "card";
  cardHolderName: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  cvc: string;
  country: string;
  currency: string;
  isDefault: boolean;
}

export interface IStripeBasicSchema {
  userId: string;
  stripePayoutAccountId?: string;
  stripePaymentCustomerId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IStripeFullAccountSchema extends IStripeBasicSchema {
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  phoneNumber?: string;

  businessName?: string;
  businessType?: "individual" | "company";
  businessMCC?: string;

  businessTaxId?: string;
  businessTaxIdType?: "EIN" | "SSN";

  payoutCards?: IPayoutCardSchema[];
  paymentCards?: IPaymentCardSchema[];
  payoutBankAccounts?:  IBankAccountSchema[];

  onboardingStatus?: "not-started" | "ongoing" | "completed";
  onboardingLink?: string;

  hasPendingRequirements?: boolean;
  pendingRequirements?: string[];
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