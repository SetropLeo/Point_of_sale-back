import { Request, Response } from "express";
import { ICategoryService } from "../services/Category.service";


class CategoryController {
  private categoryService: ICategoryService;

  constructor(categoryService: ICategoryService) {
    this.categoryService = categoryService;
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async create(request: Request, response: Response) {
    const { name } = request.body;
    const result = await this.categoryService.create({ name });

    if (result instanceof Error) return response.status(400).json(result.message);

    return response.json(result);
  }

  public async get(request: Request, response: Response) {
    const categories = await this.categoryService.get();

    return response.json(categories);
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const result = await this.categoryService.update({ id, name });
    if (result instanceof Error) return response.status(400).json(result.message);

    return response.json(result);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const result = await this.categoryService.delete(id);
    if (result instanceof Error) return response.status(400).json(result.message);

    return response.json(result);
  }
}

export default CategoryController;