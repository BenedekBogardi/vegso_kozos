import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ConcertService {
  db: PrismaService;

  constructor(db: PrismaService) {
    this.db = db;
  }

  create(createConcertDto: CreateConcertDto) {
    const modifiedStartTime = createConcertDto.startTime + 'Z';
    createConcertDto.startTime = modifiedStartTime;
    return this.db.concert.create({
      data: createConcertDto
    })
  }

  findAll() {
    return this.db.concert.findMany();
  }

  findOne(id: number) {
    return this.db.concert.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updateConcertDto: UpdateConcertDto) {
    const currentConcert = await this.db.concert.findUnique({ where: { id } });

    if (currentConcert && currentConcert.cancelled === true && updateConcertDto.cancelled === true) {
      throw new ConflictException('A koncert már elmaradt.');
    }
    try {
      return await this.db.concert.update({
        where: { id },
        data: updateConcertDto
      });
    } catch {
      if(isNaN(id)){
        throw new HttpException('Invalid ID: must be a number', HttpStatus.BAD_REQUEST);
      }
      else if(id<0){
        throw new HttpException('Invalid ID: cannot be negative', HttpStatus.BAD_REQUEST);
      }
    }
  }

  async remove(id: number) {
    try {
      return await this.db.concert.delete({
        where: {
          id
        }
      })
    } catch {
      return undefined;
    }
  }
}
