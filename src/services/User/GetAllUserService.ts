import { getRepository } from "typeorm";
import { User } from "../../entities/User";


export class GetAllUserService {
  async execute() {
    const UserRepo = getRepository(User);

    const users = await UserRepo.find();

    return users;
  }
}