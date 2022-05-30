import { getRepository } from 'typeorm';
import { Category } from '../../entities/Category';

export class DeleteCategoryService {
  async execute(id: string) {
    const foodRepository = getRepository(Category);

    if (!(await foodRepository.findOne(id))) {
      return new Error("Category Doesn't exist");
    }

    await foodRepository.delete(id);
  }
}
