"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPostStatusNotification = exports.isMessageNotification = exports.isBiddingNotification = void 0;
// Type guards for determining notification type
const isBiddingNotification = (notification) => {
    return notification.type === 'bidding';
};
exports.isBiddingNotification = isBiddingNotification;
const isMessageNotification = (notification) => {
    return notification.type === 'message';
};
exports.isMessageNotification = isMessageNotification;
const isPostStatusNotification = (notification) => {
    return notification.type === 'post_status';
};
exports.isPostStatusNotification = isPostStatusNotification;
