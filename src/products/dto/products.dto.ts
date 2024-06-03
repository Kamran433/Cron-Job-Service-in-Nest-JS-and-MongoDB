import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Date } from 'mongoose';

export class productsDTO {
  readonly _id: string;

  @IsNotEmpty()
  @IsString()
  readonly Name_of_the_cron_job: string;
  @IsNotEmpty()
  @IsNumber()
  readonly Link_to_trigger: string;
  @IsNotEmpty()
  @IsString()
  readonly API_key: string;
  @IsNotEmpty()
  @IsString()
  readonly Schedule_timings: Date;
  @IsNotEmpty()
  @IsString()
  readonly Start_Date: Date;
}
