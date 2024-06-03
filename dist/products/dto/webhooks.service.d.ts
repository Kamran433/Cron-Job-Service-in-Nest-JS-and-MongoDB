import { Model } from 'mongoose';
export interface Webhook {
    id: string;
    url: string;
    createdAt: Date;
}
export declare class WebhooksService {
    private readonly webhookModel;
    constructor(webhookModel: Model<Webhook>);
    getAllWebhooks(): Promise<Webhook[]>;
}
export default WebhooksService;
