import { Request, Response } from "express";
import { GetAllOrderService } from "../../services/Order/GetAllOrderService";

export class GetAllOrderController {
  async handle(request: Request, response: Response) {
    const service = new GetAllOrderService();

    const orders = await service.execute();

    return response.json(orders);
  }
}