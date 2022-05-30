import { getRepository } from 'typeorm';
import { Food } from '../../entities/Food';

export class GetAllFoodService {
  async execute() {
    const foodRepo = getRepository(Food);

    const foods = await foodRepo.find({
      relations: ['category'],
    });

    return foods;
  }
}
