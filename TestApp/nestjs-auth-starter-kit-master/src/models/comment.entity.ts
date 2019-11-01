import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Bar } from './bar.entity';
import { Cocktail } from './cocktail.entity';

@Entity({ name: 'comments' })
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @JoinColumn({ name: 'bar_id' })
    @ManyToOne(type => Bar, bar => bar.comments)
    public bar: Bar;

    @Column({ type: 'int', name: 'bar_id', nullable: true })
    public barId: number;

    @JoinColumn({ name: 'cocktail_id' })
    @ManyToOne(type => Cocktail, cocktail => cocktail.comments)
    public cocktail: Cocktail;

    @Column({ type: 'int', name: 'bar_id', nullable: true })
    public cocktailId: number;
}