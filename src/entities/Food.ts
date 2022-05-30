import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Category } from './Category';
import { BaseEntity } from './Base';

@Entity('foods')
export class Food extends BaseEntity {
  @Column({ type: 'varchar', length: 25 })
  name: string;

  @Column({ type: 'varchar', length: 250 })
  image: string;

  @Column({ type: 'varchar', length: 250 })
  description: string;

  @Column()
  category_id: string;
  
  @Column()
  price: number;
  
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
