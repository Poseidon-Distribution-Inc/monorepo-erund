import { Vehicle } from "./profile";
export type biddingStatusEnum = "pending" | "pending_accepted" | "accepted" | "rejected" | "cancelled";
export interface IBidder {
    bidderId: string;
    bidderName: string;
    bidAmount: number;
    bidderNote?: string;
    bidderVehicle: Vehicle | "walking";
    status: biddingStatusEnum;
    isActive: boolean;
}
export interface IBiddingSchema {
    postId: string;
    posterId: string;
    transactionId?: string;
    bidders: IBidder[];
    selectedBidder?: string;
    selectedAmount?: string;
    status: biddingStatusEnum;
    isActive: boolean;
}
export interface IBidding extends IBiddingSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
