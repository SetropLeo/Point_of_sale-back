import { Column, Entity } from 'typeorm';
import { BaseEntity } from './Base';

@Entity('users')
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  first_name: string;

  @Column({ type: 'varchar', length: 50 })
  last_name: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;
}
