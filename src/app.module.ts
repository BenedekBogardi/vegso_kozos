import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { ConcertModule } from './concert/concert.module';

@Module({
  imports: [BooksModule, ConcertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
