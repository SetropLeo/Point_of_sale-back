import { Request, Response } from "express";
import { CreateFoodService } from "../../services/Food/CreateFoodService";


export class CreateFoodController {
  async handle(request: Request, response: Response) {
    const { name, image, description, category_id, price, quantity } = request.body;

    const service = new CreateFoodService();

    const result = await service.execute({ name, image, description, category_id, price, quantity });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}