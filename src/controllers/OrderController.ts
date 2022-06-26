import { Request, Response } from "express";
import { IOrderService } from "../services/Order.service";


class OrderController {
  private orderService: IOrderService;

  constructor(orderService: IOrderService) {
    this.orderService = orderService;
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.getLast10 = this.getLast10.bind(this);
  }

  public async create(request: Request, response: Response) {
    const { price, user_id } = request.body;

    const creationResult = await this.orderService.create({ price, user_id });
    if (creationResult instanceof Error) return response.status(400).json(creationResult.message);

    return response.json(creationResult)
  }

  public async get(request: Request, response: Response) {
    const getAllResult = await this.orderService.get();
    if (getAllResult instanceof Error) return response.status(400).json(getAllResult.message);

    return response.json(getAllResult);
  }

  public async getLast10(request: Request, response: Response) {
    const getLast10Result = await this.orderService.getLast10();
    if (getLast10Result instanceof Error) return response.status(400).json(getLast10Result.message);

    return response.json(getLast10Result);
  }
}

export default OrderController;