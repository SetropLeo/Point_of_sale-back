import { getRepository } from "typeorm";

type DetailRequest = {
  order_id: string;
};

export class GetDetailService {

  async execute({ order_id }: DetailRequest) {

    const getDetailsByOrderID = await
      getRepository("details")
        .createQueryBuilder("details")
        .leftJoinAndSelect("details.food", "foods", "foods.id = details.food_id")
        .where("details.order_id = :order_id", { order_id: order_id })
        .getMany();

    return getDetailsByOrderID;
  }
}