import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bar } from '../../models/bar.entity';
import { Cocktail } from '../../models/cocktail.entity';
import { BarController } from './controller/bar.controller';
import { BarService } from './service/bar.service';
import { typeOrmConfig } from '../../config/typeorm-config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bar]),
    TypeOrmModule.forFeature([Cocktail]),
  ],
  controllers: [
    BarController,
  ],
  providers: [
    BarService,
  ],
})
export class BarModule { }
