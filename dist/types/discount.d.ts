export type DiscountStatus = "open" | "pending" | "closed" | "applied" | "expired";
export interface IDiscountSchema {
    code: string;
    description: string;
    type: string;
    userId?: string;
    email?: string;
    referenceNum?: string;
    discountAmount?: number;
    percentOff?: number;
    startDate?: Date;
    endDate?: Date;
    usageLimit?: number;
    usedCount?: number;
    status: DiscountStatus;
    isActive: boolean;
}
export interface IDiscount extends IDiscountSchema {
    id: string;
    createAt: Date;
    updatedAt: Date;
}
