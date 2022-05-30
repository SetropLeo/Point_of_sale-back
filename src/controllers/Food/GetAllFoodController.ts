import { Request, Response } from 'express';
import { GetAllFoodService } from '../../services/Food/GetAllFoodService';

export class GetAllFoodController {
  async handle(request: Request, response: Response) {
    const service = new GetAllFoodService();

    const foods = await service.execute();

    return response.json(foods);
  }
}
