import { Request, Response } from "express";
import { IUserService } from "../services/User.Service";


class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
  }

  public async create(request: Request, response: Response) {
    const { first_name, last_name, email } = request.body;

    const result = await this.userService.create({ first_name, last_name, email })
    if (result instanceof Error) return response.status(400).json(result.message);

    return response.json(result);
  }

  public async get(request: Request, response: Response) {
    const users = await this.userService.get();

    return response.json(users);
  }
}

export default UserController;