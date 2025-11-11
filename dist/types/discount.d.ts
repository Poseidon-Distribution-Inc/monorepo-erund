export type DiscountStatus = "open" | "pending" | "closed" | "applied" | "expired";
export interface IDiscountSchema {
    name: string;
    type: string;
    userId?: string;
    email?: string;
    referenceNum?: string;
    discountAmount?: number;
    percentOff?: number;
    isFirstPost?: boolean;
    status: DiscountStatus;
    isActive: boolean;
}
export interface IDiscount extends IDiscountSchema {
    id: string;
    createAt: Date;
    updatedAt: Date;
}
