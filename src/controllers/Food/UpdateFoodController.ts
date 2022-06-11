import { Request, Response } from 'express';
import { UpdateFoodService } from '../../services/Food/UpdateFoodService';

export class UpdateFoodController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, image, description, category_id, price } = request.body;

    const service = new UpdateFoodService();

    const result = await service.execute({ id, name, image, description, category_id, price });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
