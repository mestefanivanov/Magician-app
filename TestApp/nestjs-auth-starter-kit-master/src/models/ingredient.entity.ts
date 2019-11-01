import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Cocktail } from './cocktail.entity';

@Entity({ name: 'ingredients' })
export class Ingredient extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Cocktail, cocktail => cocktail.ingredients)
    public cocktails: Cocktail[];
}