import { Request, Response } from "express";
import { IFoodService } from "../services/Food.service";

class FoodController {
  private foodService: IFoodService;

  constructor(foodService: IFoodService) {
    this.foodService = foodService;
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async create(request: Request, response: Response) {
    const { name, image, description, category_id, price } = request.body;

    const result = await this.foodService.create({ name, image, description, category_id, price });
    if (result instanceof Error) return response.status(400).json(result.message)

    return response.json(result);
  }

  public async get(request: Request, response: Response) {
    const foods = await this.foodService.get();

    return response.json(foods);
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, image, description, category_id, price } = request.body;

    const result = await this.foodService.update({ id, name, image, description, category_id, price });
    if (result instanceof Error) return response.status(400).json(result.message);

    return response.json(result);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const result = await this.foodService.delete(id);
    if (result instanceof Error) return response.json(400).json(result.message);

    return response.json(result);
  }
}

export default FoodController;