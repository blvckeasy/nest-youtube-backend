import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from '../user/schemas/user.schema'
import { UserService } from '../user/user.service'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService, UserService]
})
export class AuthModule {}
