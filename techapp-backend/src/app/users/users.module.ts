import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserEntity } from './user.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserEntity }])],
})
export class UsersModule {}