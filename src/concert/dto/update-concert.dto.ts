import { PartialType } from '@nestjs/mapped-types';
import { CreateConcertDto } from './create-concert.dto';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateConcertDto extends PartialType(CreateConcertDto) {
  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  cancelled?: boolean;
}
