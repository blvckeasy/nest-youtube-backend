import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema'
import { UserDto, UserSearchParamsDto, UserCreateDto, } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor (@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async get (searchParams: UserSearchParamsDto = {}): Promise<UserDto[]> {
    const data: Array<UserDto> = await this.userModel.find(searchParams)
    return data
  }

  async create (params: UserCreateDto): Promise<UserDto> {
    const data: any = await this.userModel.create(params);
    console.log(data)
    return data
  }
}
