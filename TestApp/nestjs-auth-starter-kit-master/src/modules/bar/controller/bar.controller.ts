import { Get, Controller, Post, Body, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Bar } from '../../../models/bar.entity';
import { BarService } from '../service/bar.service';
import { CreateBarDto } from '../dto/create-bar.dto';
import { CreateBarWithCocktailsDto } from '../dto/create-bar-with-cocktails';

@ApiUseTags('bar')
@Controller('bar')
export class BarController {
  constructor(private readonly barService: BarService) { }

  @Get('allBars')
  getAllBars(): Promise<Bar[]> {
    return this.barService.findAllBars();
  }

  @Get('allBarsWithCocktails')
  getAllBarss(): Promise<Bar[]> {
    return this.barService.findAllBarsWithCocktails();
  }

  @Get(':id')
  public async getBarByIdWithCocktails(@Param() id: number): Promise<Bar> {
    return await this.barService.findBarByIdWithCocktails(id);
  }

  @Post()
  public async createBar(@Body() createBarDto: CreateBarDto): Promise<Bar> {
    return await this.barService.createBar(createBarDto);
  }

  @Post('createbar')
  public async createBarWithCocktails(@Body() createBarWithCocktailsDto: CreateBarWithCocktailsDto): Promise<Bar> {
    return await this.barService.createBarWithCocktails(createBarWithCocktailsDto);
  }
}
