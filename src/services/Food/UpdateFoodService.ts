import { getRepository } from 'typeorm';
import { Food } from '../../entities/Food';

type FoodUpdateRequest = {
  id: string;
  name: string;
  image: string;
  description: string;
  category_id: string;
  price: number;
  quantity: number;
};

export class UpdateFoodService {
  async execute({
    id,
    name,
    image,
    description,
    category_id,
    price,
    quantity,
  }: FoodUpdateRequest) {
    const foodRepo = getRepository(Food);

    const food = await foodRepo.findOne(id);

    if (!food) {
      return new Error('Food not found');
    }

    food.name = name ? name : food.name;
    food.image = image ? image : food.image;
    food.description = description ? description : food.description;
    food.category_id = category_id ? category_id : food.category_id;
    food.price = price ? price : food.price;
    food.quantity = quantity ? quantity : food.quantity;

    foodRepo.save(food);

    return food;
  }
}
