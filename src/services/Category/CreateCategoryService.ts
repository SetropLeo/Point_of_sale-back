import { getRepository } from 'typeorm';
import { Category } from '../../entities/Category';

type CategoryRequest = {
  name: string;
};

export class CreateCategoryService {
  async execute({ name }: CategoryRequest): Promise<Category | Error> {
    const foodRepository = getRepository(Category);

    if (await foodRepository.findOne({ name })) {
      return new Error('Category already exists');
    }

    const category = foodRepository.create({ name });

    await foodRepository.save(category);
    return category;
  }
}
