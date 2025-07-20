import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserEntity } from './user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserEntity }])],
})
export class UsersModule {}