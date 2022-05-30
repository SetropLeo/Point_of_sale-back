import { getRepository } from 'typeorm';
import { Category } from '../../entities/Category';

export class GetAllCategoryService {
  async execute() {
    const foodRepository = getRepository(Category);

    const categories = await foodRepository.find();

    return categories;
  }
}
