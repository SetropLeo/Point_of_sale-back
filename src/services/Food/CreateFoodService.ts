import { getRepository } from 'typeorm';
import { Category } from '../../entities/Category';
import { Food } from '../../entities/Food';

type FoodRequest = {
  name: string;
  image: string;
  description: string;
  category_id: string;
  price: number;
  quantity: number;
};

export class CreateFoodService {
  async execute({
    name,
    image,
    description,
    category_id,
    price,
  }: FoodRequest): Promise<Error | Food> {
    const foodRepository = getRepository(Food);
    const categoryRepository = getRepository(Category);

    if (!(await categoryRepository.findOne(category_id))) {
      return new Error('Category not found');
    }

    if (await foodRepository.findOne({ name })) {
      return new Error('Food already exists');
    }

    const food = foodRepository.create({
      name,
      image,
      description,
      category_id,
      price,
    });

    await foodRepository.save(food);

    return food;
  }
}
