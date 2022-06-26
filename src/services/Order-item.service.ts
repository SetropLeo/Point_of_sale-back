import { getRepository } from "typeorm";
import { Food } from "../entities/Food";
import { OrderItem } from "../entities/OrderItem";

type OrderItemRequest = {
  quantity: number;
  food_id: string;
  order_id: string;
}

export interface IOrderItem {
  create: (orderItemRequest: OrderItemRequest) => Promise<Error | OrderItem>;
  get: () => Promise<Error | OrderItem[]>;
  getById: (order_id: string) => Promise<Error | OrderItem[]>;
}

class OrderItemService implements IOrderItem {

  public async create({ quantity, food_id, order_id }: OrderItemRequest): Promise<Error | OrderItem> {
    const orderItemsRepository = getRepository(OrderItem);;
    const foodRepository = getRepository(Food);

    if (!(await foodRepository.findOne(food_id))) return new Error('Food not found')

    const orderItem = orderItemsRepository.create({ quantity, food_id, order_id })
    await orderItemsRepository.save(orderItem);

    return orderItem;
  }

  public async get(): Promise<Error | OrderItem[]> {
    const orderItemsRepository = getRepository(OrderItem);

    const orderItemsResult = await orderItemsRepository.find({ relations: ['food', 'order'] })
    return orderItemsResult;
  }

  public async getById(order_id: string): Promise<Error | OrderItem[]> {
    const orderItemsRepository = getRepository(OrderItem);

    const getDetailsByOrderID =
      await orderItemsRepository
        .createQueryBuilder("order_items")
        .leftJoinAndSelect("order_items.food", "foods", "foods.id = order_items.food_id")
        .where("order_items.order_id = :order_id", { order_id: order_id })
        .getMany();

    return getDetailsByOrderID;
  }
}

export default OrderItemService;