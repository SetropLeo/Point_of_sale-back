import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  name: string;
};

type CategoryUpdateRequest = {
  id: string;
  name: string;
};

export interface ICategoryService {
  create: (categoryRequest: CategoryRequest) => Promise<Error | Category>;
  get: () => Promise<Error | Category[]>;
  update: (foodUpdateRequest: CategoryUpdateRequest) => Promise<Error | Category>;
  delete: (foodId: string) => Promise<Error | void>
}

class CategoryService implements ICategoryService {

  public async create({ name }: CategoryRequest): Promise<Category | Error> {
    const categoryRepository = getRepository(Category);

    if (await categoryRepository.findOne({ name })) return new Error('Category already exists');

    const category = categoryRepository.create({ name });

    await categoryRepository.save(category);
    return category;
  }

  public async get(): Promise<Error | Category[]> {
    const categoryRepository = getRepository(Category);

    const categories = await categoryRepository.find();

    return categories;
  }

  public async update({ id, name }: CategoryUpdateRequest): Promise<Error | Category> {
    const categoryRepository = getRepository(Category);

    const category = await categoryRepository.findOne(id);

    if (!category) return new Error("Category Doesn't exist!");

    category.name = name ? name : category.name;

    categoryRepository.save(category);
    return category;
  }

  public async delete(categoryId: string): Promise<Error | void> {
    const categoryRepository = getRepository(Category);
    const verifyCategory = await categoryRepository.findOne(categoryId);

    if (!verifyCategory) return new Error("Category Doesn't exist");

    await categoryRepository.delete(categoryId);
  }
}

export default CategoryService;