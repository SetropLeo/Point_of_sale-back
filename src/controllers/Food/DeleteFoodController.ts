import { Request, Response } from 'express';
import { DeleteFoodService } from '../../services/Food/DeleteFoodService';

export class DeleteFoodController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteFoodService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.json(400).json(result.message);
    }

    return response.json(result);
  }
}