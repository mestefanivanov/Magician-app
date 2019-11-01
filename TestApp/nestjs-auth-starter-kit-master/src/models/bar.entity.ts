import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Comment } from './comment.entity';
import { Rate } from './rate.entity';
import { Cocktail } from './cocktail.entity';

@Entity({ name: 'bars' })
export class Bar extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    image: string;

    @Column()
    phoneNumber: string;

    @Column()
    available: boolean;

    @OneToMany(type => Comment, comment => comment.bar)
    public comments: Comment[];

    @OneToMany(type => Rate, rate => rate.bar)
    public rates: Rate[];

    @ManyToMany(type => Cocktail, cocktails => cocktails.bars)
    @JoinTable({
      joinColumn: {
        name: 'cocktail_id',
        referencedColumnName: 'id',
      },
      inverseJoinColumn: {
        name: 'bar_id',
        referencedColumnName: 'id',
      },
    })
    public cocktails: Cocktail[];
}