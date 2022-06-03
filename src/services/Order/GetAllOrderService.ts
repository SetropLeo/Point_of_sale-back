import { getRepository } from "typeorm";
import { Order } from "../../entities/Order";


export class GetAllOrderService {
  async execute() {
    const orderRepo = getRepository(Order);

    const orders = await orderRepo.find({
      relations: ['user'],
    });

    return orders;
  }
}