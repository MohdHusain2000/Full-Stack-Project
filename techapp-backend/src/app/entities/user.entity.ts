//https://medium.com/@awaisshaikh94/a-detailed-guide-on-implementing-authentication-in-nestjs-4a347ce154b6

import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
@Entity()
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}