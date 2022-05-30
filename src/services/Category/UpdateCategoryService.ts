import { getRepository } from 'typeorm';
import { Category } from '../../entities/Category';

type CategoryUpdateRequest = {
  id: string;
  name: string;
};

export class UpdateCategoryService {
  async execute({ id, name }: CategoryUpdateRequest) {
    const foodRepository = getRepository(Category);

    const category = await foodRepository.findOne(id);

    if (!category) {
      return new Error("Category Doesn't exist!");
    }

    category.name = name ? name : category.name;

    foodRepository.save(category);
    return category;
  }
}
