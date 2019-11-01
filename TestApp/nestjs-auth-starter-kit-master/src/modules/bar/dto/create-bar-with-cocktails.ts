import { Cocktail } from '../../../models/cocktail.entity';

export class CreateBarWithCocktailsDto {
    name: string;
    address: string;
    image: string;
    phoneNumber: string;
    available: boolean;
    cocktails: [Cocktail];
}