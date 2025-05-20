import { biddingStatusEnum } from './bidding';

// Define specific notification types
export type NotificationType = 'bidding' | 'message' | 'post_status' | 'system';

// Base notification schema
export interface INotificationSchema {
    _id: string;
    userId: string;   // ID of the user receiving the notification
    title: string;
    message: string;
    type: NotificationType;
    isRead: boolean;
    createdAt: Date;
    updatedAt: Date;
    
    // Fields for bidding notifications
    biddingId?: string;
    biddingStatus?: biddingStatusEnum;
    postId?: string;
    bidderId?: string;
    bidderName?: string;
    biddingAmount?: string;
    
    // Fields for message notifications
    conversationId?: string;
    senderId?: string;
    senderName?: string;
    messagePreview?: string;
    
    // Fields for post status notifications
    previousStatus?: string;
    newStatus?: string;
}

// Type guards for determining notification type
export const isBiddingNotification = (notification: INotificationSchema): boolean => {
    return notification.type === 'bidding';
};

export const isMessageNotification = (notification: INotificationSchema): boolean => {
    return notification.type === 'message';
};

export const isPostStatusNotification = (notification: INotificationSchema): boolean => {
    return notification.type === 'post_status';
};