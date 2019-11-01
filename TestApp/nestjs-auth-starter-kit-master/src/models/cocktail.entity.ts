import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { Bar } from './bar.entity';
import { Rate } from './rate.entity';
import { Ingredient } from './ingredient.entity';
import { Comment } from './comment.entity';

@Entity({ name: 'cocktails' })
export class Cocktail extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    available: boolean;

    @OneToMany(type => Rate, rate => rate.bar)
    public rates: Rate[];

    @OneToMany(type => Comment, comment => comment.cocktail)
    public comments: Comment[];

    @ManyToMany(type => Bar, bar => bar.cocktails)
    public bars: Bar[];

    @ManyToMany(type => Ingredient, ingredient => ingredient.cocktails)
    @JoinTable({
        joinColumn: {
            name: 'ingredient_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'cocktail_id',
            referencedColumnName: 'id',
        },
    })
    public ingredients: Ingredient[];
}