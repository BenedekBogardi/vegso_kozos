import { PartialType } from '@nestjs/mapped-types';
import { CreateConcertDto } from './create-concert.dto';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateConcertDto extends PartialType(CreateConcertDto) {
  @IsNotEmpty()
  @IsString()
  performer: string;

  @IsNotEmpty()
  @IsDate()
  startTime: Date;

  @IsNotEmpty()
  @IsNumber()
  duration: number;

  @IsNotEmpty()
  @IsBoolean()
  cancelled: boolean;
}
