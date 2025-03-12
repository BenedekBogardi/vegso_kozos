import { Injectable } from '@nestjs/common';
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
    try {
      return await this.db.concert.update({
        where: { id },
        data: updateConcertDto
      });
    } catch {
      return undefined;
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
