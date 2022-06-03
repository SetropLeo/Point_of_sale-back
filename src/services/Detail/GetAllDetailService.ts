import { getRepository } from "typeorm";
import { Detail } from "../../entities/Details";


export class GetAllDetailService {
  async execute() {
    const detailRepo = getRepository(Detail);

    const details = await detailRepo.find({
      relations: ['food', 'order'],
    })

    return details;
  }
}