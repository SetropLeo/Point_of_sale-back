import { Request, Response } from "express";
import { CreateDetailService } from "../../services/Detail/CreateDetailService";

export class CreateDetailController {
  async handle(request: Request, response: Response) {
    const { quantity, order_id, food_id } = request.body;

    const service = new CreateDetailService();

    const result = await service.execute({ quantity, order_id, food_id })

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}