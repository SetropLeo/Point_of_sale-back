import { getRepository } from 'typeorm';
import { Food } from '../../entities/Food';

export class DeleteFoodService {
  async execute(id: string) {
    const foodRepo = getRepository(Food);

    if (!(await foodRepo.findOne(id))) {
      return new Error('Food not found');
    }

    await foodRepo.delete(id);
  }
}
