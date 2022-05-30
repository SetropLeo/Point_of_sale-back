import { Request, Response } from "express";
import { CreateOrderService } from "../../services/Order/CreateOrderService";


export class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { list, price, user_id } = request.body;
    const service = new CreateOrderService();
    const result = await service.execute({ list, price, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}