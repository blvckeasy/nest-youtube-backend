import { Body, Controller, ForbiddenException, Get, Param, Post, Query } from '@nestjs/common';
import { UserCreateDto, UserDto, UserSearchParamsDto } from './dto/user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor (
    private userService: UserService
  ) {}

  @Get("get")
  async getUsers(@Query() searchParams: UserSearchParamsDto): Promise<UserDto[]> {
    return await this.userService.get(searchParams)
  }

  @Get("nimadur/*")
  async getNimadur() {
    return "success"
  }

  @Post("post")
  async craeteUser(
    @Body() userParams: UserCreateDto
  ): Promise<UserDto> {
    return await this.userService.create(userParams)
  }

  @Post("test")
  async test() {
    throw new ForbiddenException("asdf")
  }
}