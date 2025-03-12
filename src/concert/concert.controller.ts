import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { ConcertService } from './concert.service';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';

@Controller('concert')
export class ConcertController {
  constructor(private readonly concertService: ConcertService) {}

  @Post()
  create(@Body() createConcertDto: CreateConcertDto) {
    return this.concertService.create(createConcertDto);
  }

  @Get()
  findAll() {
    return this.concertService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const concert = await this.concertService.findOne(+id);
    if (!concert) throw new NotFoundException('No concert with ID ' + id);

    return concert;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateConcertDto: UpdateConcertDto) {
    const concert = await this.concertService.update(+id, updateConcertDto);
    if (!concert) throw new NotFoundException('No concert with ID ' + id);

    return concert;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const success = await this.concertService.remove(+id);
    if (!success) {
      throw new NotFoundException('No concert with ID ' + id);
    }
  }
}
