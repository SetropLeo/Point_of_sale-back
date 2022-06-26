import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./Base";
import { Food } from "./Food";
import { Order } from "./Order";


@Entity('order_items')
export class OrderItem extends BaseEntity {

  @Column()
  quantity: number;

  @Column()
  food_id: string;

  @Column()
  order_id: string;

  @ManyToOne(() => Food)
  @JoinColumn({ name: 'food_id' })
  food: Food;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'order_id' })
  order: Order;
}
