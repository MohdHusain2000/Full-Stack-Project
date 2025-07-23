//https://dev.to/fredabod/building-a-nestjs-authentication-api-with-mongodb-and-jwt-a-step-by-step-guide-52hb
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { jwtConstants } from './constants';
import { User, UserSchema } from '../users/user.entity';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtAuthGuard } from './auth.guard';

@Module({
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }, AuthService],
  exports: [AuthService],
  controllers: [AuthController],
    imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),    UsersModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class AuthModule {}
