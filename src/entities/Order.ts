import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base';
import { Food } from './Food';
import { User } from './User';

@Entity('orders')
export class Order extends BaseEntity {
  @Column()
  price: number;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
