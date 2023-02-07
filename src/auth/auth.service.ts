import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CustomError } from 'src/helpers/custom-errors'
import { UserCreateDto } from '../user/dto/user.dto'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor (
    private readonly userService: UserService,
  ) {}

  async login () {
    throw new ForbiddenException("hello world");
  }

  async register (body: UserCreateDto) {
    throw new CustomError("ishladi", HttpStatus.GONE);
  }
}