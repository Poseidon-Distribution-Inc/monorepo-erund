export interface IBankAccountSchema {
  type: string;
  accountHolderName: string;
  accountNumber: string;
  routingNumber: string;
  country: string;
  currency: string;
}

export interface ICardSchema {
  type: string;
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

  card: ICardSchema | null;
  bankAccount: IBankAccountSchema | null;
}

export interface IStripeAccount extends IStripeFullAccountSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
