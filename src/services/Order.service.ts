import { getRepository } from "typeorm";
import { Order } from '../entities/Order';
import asyncForEach from "../utils/Utils";
import OrderItemService from "./Order-item.service";

type OrderRequest = {
  price: number;
  user_id: string;
}

export interface IOrderService {
  create: (foodRequest: OrderRequest) => Promise<Error | Order>;
  get: () => Promise<Error | Order[]>;
  getLast10: () => any;
}

class OrderService implements IOrderService {

  public async create({ price, user_id }: OrderRequest): Promise<Error | Order> {
    const orderRepository = getRepository(Order);

    const order = orderRepository.create({ price, user_id })

    await orderRepository.save(order);
    return order;
  }

  public async get(): Promise<Error | Order[]> {
    const orderRepository = getRepository(Order)

    const orders = await orderRepository.find();
    return orders;
  }

  public async getLast10() {
    const orderItemService = new OrderItemService();
    let foodsByOrders = [];

    const orders = await getRepository(Order)
      .createQueryBuilder("orders")
      .take(10)
      .orderBy("orders.created_at", "DESC")
      .getMany();

    // orders = [
    //   {
    //     order_id: 'string',
    //     foods: [
    //       {
    //         name: 'string',
    //         price: 'number',
    //         quantity: 'number',
    //         image: 'string',
    //       }
    //     ]
    //   }
    // ]

    await asyncForEach(orders, async (order) => {
      orderItemService.getById(order.id)
        .then((orderItems: any) => {
          if (orderItems.length) {

            const orderObject = {
              order_id: orderItems.id,
              foods: [
                
              ]
            }
          }
        })
    })
    return foodsByOrders;
  }
}

export default OrderService;