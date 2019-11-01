import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Bar } from './bar.entity';
import { Cocktail } from './cocktail.entity';

@Entity({ name: 'rates' })
export class Rate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rate: number;

    @JoinColumn({ name: 'bar_id' })
    @ManyToOne(type => Bar, bar => bar.rates)
    public bar: Bar;

    @Column({ type: 'int', name: 'bar_id', nullable: true })
    public barId: number;

    @JoinColumn({ name: 'cocktail_id' })
    @ManyToOne(type => Cocktail, cocktail => cocktail.rates)
    public cocktail: Cocktail;

    @Column({ type: 'int', name: 'cocktail_id', nullable: true })
    public cocktailId: number;
}