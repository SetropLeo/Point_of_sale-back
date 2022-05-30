import { getRepository } from "typeorm";
import { Food } from "../../entities/Food"
import { Order } from '../../entities/Order'

type OrderRequest = {
  list: Food[];
  price: number;
  user_id: string;
}

export class CreateOrderService {
  async execute({ list, price, user_id }: OrderRequest) {
    const orderRepo = getRepository(Order);

    const order = orderRepo.create({
      list,
      price,
      user_id
    })

    await orderRepo.save(order);

    return order;
  }
}