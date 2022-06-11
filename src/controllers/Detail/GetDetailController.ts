
import { Request, Response } from 'express';
import { GetDetailService } from '../../services/Detail/GetDetailService';

export class GetDetailController {
  async handle(request: Request, response: Response) {
    const service = new GetDetailService();
    const { order_id } = request.params;

    const result = await service.execute({ order_id })
    return response.json(result);
  }
}