import { Date } from 'mongoose';
export declare class productsDTO {
    readonly _id: string;
    readonly Name_of_the_cron_job: string;
    readonly Link_to_trigger: string;
    readonly API_key: string;
    readonly Schedule_timings: Date;
    readonly Start_Date: Date;
}
