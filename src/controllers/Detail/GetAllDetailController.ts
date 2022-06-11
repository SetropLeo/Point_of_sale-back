
import { Request, Response } from 'express';
import { GetAllDetailService } from '../../services/Detail/GetAllDetailService';

export class GetAllDetailController {
  async handle(request: Request, response: Response) {
    const service = new GetAllDetailService();

    const result = await service.execute();
    return response.json(result);
  }
}