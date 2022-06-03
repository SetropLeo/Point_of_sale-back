import { getRepository } from "typeorm";
import { Order } from '../../entities/Order'

type OrderRequest = {
  price: number;
  user_id: string;
}

export class CreateOrderService {
  async execute({ price, user_id }: OrderRequest) {
    const orderRepo = getRepository(Order);

    const order = orderRepo.create({
      price,
      user_id
    })

    await orderRepo.save(order);

    return order;
  }
}