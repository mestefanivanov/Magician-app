import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm-config';
import { BarModule } from './modules/bar/bar.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BarModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
