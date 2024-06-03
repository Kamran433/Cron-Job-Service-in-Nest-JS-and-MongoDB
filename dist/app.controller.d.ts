import { AppService } from './app.service';
export interface Webhook {
    id: string;
    url: string;
    createdAt: Date;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
