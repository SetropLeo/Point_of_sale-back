import { Request, Response } from "express";
import { IOrderItem } from "../services/Order-item.service";


class OrderItemController {
  private orderItemService: IOrderItem;

  constructor(orderItemService: IOrderItem) {
    this.orderItemService = orderItemService;

    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.getById = this.getById.bind(this);
  }

  public async create(request: Request, response: Response) {
    const { quantity, food_id, order_id } = request.body;

    const creationResult = this.orderItemService.create({ quantity, food_id, order_id });
    if (creationResult instanceof Error) return response.status(400).json(creationResult.message)

    return response.json(creationResult);
  }

  public async get(request: Request, response: Response) {
    const getAllResult = await this.orderItemService.get();
    if (getAllResult instanceof Error) return response.status(400).json(getAllResult.message)

    return response.json(getAllResult);
  }

  public async getById(request: Request, response: Response) {
    const { order_id } = request.params;

    const getAllResult = await this.orderItemService.getById(order_id);
    if (getAllResult instanceof Error) return response.status(400).json(getAllResult.message);

    return response.json(getAllResult);
  }
}

export default OrderItemController;