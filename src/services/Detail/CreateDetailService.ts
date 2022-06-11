import { getRepository } from "typeorm";
import { v4 as newId } from "uuid";
import { Detail } from "../../entities/Details";
import { Food } from "../../entities/Food";
import { Order } from "../../entities/Order";

type DetailService = {
  quantity: number;
  food_id: string;
  order_id: string;
}

export class CreateDetailService {
  async execute({
    quantity, food_id, order_id
  }: DetailService): Promise<Error | Detail> {
    const detailRepository = getRepository(Detail);
    const foodRepository = getRepository(Food);
    const orderRepository = getRepository(Order);

    if (!(await foodRepository.findOne(food_id))) {
      return new Error('Food not found');
    }

    const detail = detailRepository.create({
      quantity,
      food_id,
      order_id,
    })

    await detailRepository.save(detail);

    return detail;
  }
}