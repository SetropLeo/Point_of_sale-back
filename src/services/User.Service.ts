import { getRepository } from "typeorm";
import { User } from "../entities/User";

type UserRequest = {
  first_name: string;
  last_name: string;
  email: string;
}

export interface IUserService {
  create: (userRequest: UserRequest) => Promise<Error | User>;
  get: () => Promise<Error | User[]>;
}

class UserService implements IUserService {

  public async create({ first_name, last_name, email }: UserRequest): Promise<User | Error> {
    const userRepository = getRepository(User);

    const verifyEmail = await userRepository.findOne(email);
    if (verifyEmail) return new Error('E-mail already exists');

    const user = userRepository.create({ first_name, last_name, email })
    await userRepository.save(user);

    return user;
  }

  public async get(): Promise<Error | User[]> {
    const userRepository = getRepository(User);

    const users = await userRepository.find();
    return users;
  }
}

export default UserService;