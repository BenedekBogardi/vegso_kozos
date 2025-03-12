import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcertModule } from './concert/concert.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConcertModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
