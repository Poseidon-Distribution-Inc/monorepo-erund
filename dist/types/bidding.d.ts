export type biddingStatusEnum = "pending" | "accepted" | "rejected" | "cancelled";
export interface IBidder {
    bidderId: string;
    bidderName: string;
    biddingAmount: string;
    bidderNote?: string;
    status: biddingStatusEnum;
    isActive: boolean;
}
export interface IBiddingSchema {
    postId: string;
    posterId: string;
    transactionId?: string;
    bidders: IBidder[];
    status: biddingStatusEnum;
    isActive: boolean;
}
export interface IBidding extends IBiddingSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
