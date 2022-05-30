import { Request, Response } from "express";
import { GetAllUserService } from "../../services/User/GetAllUserService";

export class GetAllUserController {
  async handle(request: Request, response: Response) {
    const service = new GetAllUserService();

    const users = await service.execute();

    return response.json(users);
  }
}