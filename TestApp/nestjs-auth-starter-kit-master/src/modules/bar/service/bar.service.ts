import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bar } from '../../../models/bar.entity';
import { Repository } from 'typeorm';
import { CreateBarDto } from '../dto/create-bar.dto';
import { CreateBarWithCocktailsDto } from '../dto/create-bar-with-cocktails';
import { Cocktail } from '../../../models/cocktail.entity';

@Injectable()
export class BarService {
  constructor(
    @InjectRepository(Bar)
    private readonly barRepository: Repository<Bar>,
    @InjectRepository(Cocktail)
    private readonly cocktailsRepository: Repository<Cocktail>,
  ) { }

  public findAllBarsWithCocktails(): Promise<Bar[]> {
    return this.barRepository.find({ relations: ['cocktails'] });
  }

  public findAllBars(): Promise<Bar[]> {
    return this.barRepository.find();
  }

  public async findBarByIdWithCocktails(id: number): Promise<Bar> {
    return await this.barRepository.findOneOrFail(id, {
      relations: ['cocktails'],
    });
  }

  public async createBar(createBarDto: CreateBarDto): Promise<Bar> {
    const { name, address, image, phoneNumber, available } = createBarDto;

    const bar = new Bar();
    bar.name = name;
    bar.address = address;
    bar.image = image;
    bar.phoneNumber = phoneNumber;
    bar.available = available;

    await bar.save();
    return bar;
  }

  public async createBarWithCocktails(createBarDto: CreateBarWithCocktailsDto): Promise<Bar> {
    const { name, address, image, phoneNumber, available, cocktails } = createBarDto;

    const bar = new Bar();
    bar.name = name;
    bar.address = address;
    bar.image = image;
    bar.phoneNumber = phoneNumber;
    bar.available = available;

    await bar.save();

    const newCocktails = this.cocktailsRepository.create(cocktails);
    newCocktails.forEach(async element => {
      element.bars = [bar];
      await element.save();
    });

    return bar;
  }

}