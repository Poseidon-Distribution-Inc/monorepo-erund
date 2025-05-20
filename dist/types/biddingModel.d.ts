export type biddingStatusEnum = "pending" | "accepted" | "rejected" | "cancelled";
export interface IBiddingSchema {
    postId: string;
    posterId: string;
    bidderId: string;
    biddingAmount: string;
    status: biddingStatusEnum;
    isActive: boolean;
}
export interface IBidding extends IBiddingSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
