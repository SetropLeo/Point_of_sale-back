import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Food } from "../entities/Food";

type FoodRequest = {
  name: string;
  image: string;
  description: string;
  category_id: string;
  price: number;
};

type FoodUpdateRequest = {
  id: string;
  name: string;
  image: string;
  description: string;
  category_id: string;
  price: number;
};

export interface IFoodService {
  create: (foodRequest: FoodRequest) => Promise<Error | Food>;
  get: () => Promise<Error | Food[]>;
  update: (foodUpdateRequest: FoodUpdateRequest) => Promise<Error | Food>;
  delete: (foodId: string) => Promise<Error | void>
}

class FoodService implements IFoodService {

  public async create({ name, image, description, category_id, price }: FoodRequest): Promise<Error | Food> {
    const categoryRepository = getRepository(Category);
    const foodRepository = getRepository(Food);
    const verifyCategory = await categoryRepository.findOne(category_id);
    const verifyFood = await foodRepository.findOne({ name });

    if (!verifyCategory) return new Error('Category not found')
    else if (verifyFood) return new Error('Food already exists');

    const food = foodRepository.create({ name, image, description, category_id, price });
    await foodRepository.save(food);

    return food;
  }

  public async get(): Promise<Error | Food[]> {
    const foodRepository = getRepository(Food);
    const foods = await foodRepository.find({ relations: ['category'] });

    return foods;
  }

  public async update({ id, name, image, description, category_id, price }: FoodUpdateRequest): Promise<Error | Food> {
    const foodRepository = getRepository(Food);
    const food = await foodRepository.findOne(id);

    if (!food) return new Error('Food not found');

    food.name = name ? name : food.name;
    food.image = image ? image : food.image;
    food.description = description ? description : food.description;
    food.category_id = category_id ? category_id : food.category_id;
    food.price = price ? price : food.price;

    await foodRepository.save(food);

    return food;
  }

  public async delete(foodId: string): Promise<Error | void> {
    const foodRepository = getRepository(Food);
    const verifyFood = await foodRepository.findOne(foodId);

    if (!verifyFood) return new Error('Food not found');

    await foodRepository.delete(foodId);
  }
}

export default FoodService;