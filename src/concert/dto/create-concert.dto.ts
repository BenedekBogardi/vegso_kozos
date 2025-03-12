import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateConcertDto {
  @IsNotEmpty()
  @IsString()
  performer: string;

  @IsNotEmpty()
  @IsDateString()
  startTime: string;

  @IsNotEmpty()
  @IsNumber()
  duration: number;

  /*@IsOptional()
  @IsBoolean()
  cancelled: boolean;*/
}
