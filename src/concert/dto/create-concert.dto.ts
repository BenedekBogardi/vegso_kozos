import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateConcertDto {
  @IsNotEmpty()
  @IsString()
  performer: string;

  @IsNotEmpty()
  @IsDate()
  startTime: Date;

  @IsNotEmpty()
  @IsNumber()
  duration: number;

  /*@IsOptional()
  @IsBoolean()
  cancelled: boolean;*/
}
