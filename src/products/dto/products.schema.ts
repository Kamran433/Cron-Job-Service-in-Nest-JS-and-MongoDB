import { Schema } from 'mongoose';
import { productsDTO } from './products.dto';

export const productSchema = new Schema<productsDTO>({
  Name_of_the_cron_job: { type: String, required: true },
  Link_to_trigger: { type: String, required: true },
  API_key: { type: String, required: true },
  Schedule_timings: { type: Date, required: true },
  Start_Date: { type: Date, required: true },
});
