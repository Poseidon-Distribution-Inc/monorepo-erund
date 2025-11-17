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
    startDate?: Date;         // when discount becomes active
    endDate?: Date;           // when discount expires
    usageLimit?: number;      // how many times this code can be used
    usedCount?: number;       // how many times it has been used
    status: DiscountStatus;
    isActive: boolean;
}

export interface IDiscount extends IDiscountSchema {
    id: string;
    createAt: Date;
    updatedAt: Date;
}
