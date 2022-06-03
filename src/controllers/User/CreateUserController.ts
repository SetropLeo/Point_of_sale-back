import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { first_name, last_name, email } = request.body;
    const service = new CreateUserService();
    const result = await service.execute({ first_name, last_name, email })

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result);
  }
}