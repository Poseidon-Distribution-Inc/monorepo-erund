export type paymentStatus =
  | "pending"
  | "held"
  | "paid"
  | "transferred"
  | "completed"
  | "dispute_refunded"
  | "dispute_released"
  | "dispute_split"
  | "failed"
  | "processing"
  | "cancelled";

export interface IPaymentSchema {
  transactionId: string;
  referenceNum: string;
  posterId: string;
  runnerId: string;
  currency: string;

  //BASE
  baseFeeAmount: number;

  // PLATFORM
  platformFeePercentage: number;
  platformFixedFee: number;
  platformFeeAmount: number;

  //STRIPE
  stripeFixedFee: number;
  stripeFeePercentage: number;
  stripeFeeAmount: number;

  //TAX
  taxFeePercentage: number;
  taxFeeAmount: number;

  //PAYEE
  payeeAmount: number;
  tipAmount?: number;

  //TOTAL
  totalAmount: number;

  //Stripe IDs
  stripePaymentIntentId?: string;
  stripeTransferId?: string;
  stripeChargeId?: string;
  stripePayoutId?: string;

  transferedAmount?: number;
  refundAmount?: number;
  payoutAmount?: number;
  autoReleaseDate: Date;
  releaseType?: string;
  releaseAt?: Date;
  heldAt?: Date;
  paidAt?: Date;
  resolvedAt?: Date;
  cancelledAt?: Date;
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

export type APIPaymentResponse =
  | APIPaymentSuccessResponse
  | APIPaymentErrorResponse;

export interface APICreatePaymentRequest {
  payment: Omit<
    IPaymentSchema,
    | "status"
    | "isActive"
    | "heldAt"
    | "completedAt"
    | "disputedAt"
    | "disputeResolvedAt"
    | "autoReleaseDate"
  >;
}

export interface APIUpdatePaymentRequest {
  payment: Partial<IPaymentSchema>;
}

// Escrow-specific payment API requests
export interface APIPaymentEscrowRequest {
  payor: string;
  payee: string;
  errandId: string;
  amount: number;
  currency?: string;
  description: string;
  escrowHoldPeriodDays?: number; // Default is 7 days if not specified
  metadata?: Record<string, any>;
}

export interface APIReleasePaymentRequest {
  paymentId: string;
  notes?: string;
}

export interface APIDisputePaymentRequest {
  paymentId: string;
  reason: string;
  disputeFiledBy: string; // User ID of who filed the dispute
  evidence?: string;
}

export interface APICancelPaymentRequest {
  paymentId: string;
  reason: string;
}
