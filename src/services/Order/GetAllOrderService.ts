import { getRepository } from "typeorm";
import { Order } from "../../entities/Order";


export class GetAllOrderService {
  async execute() {

    const orders = await 
      getRepository(Order)
      .createQueryBuilder("orders")
      .take(10)
      .orderBy("orders.created_at", "DESC")
      .getMany();

    return orders;
  }
}