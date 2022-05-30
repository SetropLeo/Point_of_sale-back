import { getRepository } from "typeorm";
import { User } from "../../entities/User";

type UserRequest = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ first_name, last_name, email, password }: UserRequest): Promise<User | Error> {
    const userRepo = getRepository(User);

    const user = userRepo.create({
      first_name,
      last_name,
      email,
      password
    })

    await userRepo.save(user);

    return user;
  }
}