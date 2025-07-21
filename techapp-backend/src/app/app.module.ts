import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [AuthModule,UsersModule,MongooseModule.forRoot(process.env.MONGO_URL),ConfigModule.forRoot()
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
