import { Controller, Render, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../user/user.service'
import { AuthService } from './auth.service'


@Controller('auth')
export class AuthController {
  constructor (
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Get()
  @Render("auth/index")
  root() {
    return { data: [
      { price: 900000 },
      { price: 230000 },
      { price: 10056040 },
      { price: 1250900 },
      { price: 11300100 },
    ]}
  }

  @Post('register')
  async register(
    @Body() user: any
  ) {
    return await this.authService.register(user)
  }

  @Post('login')
  async login(
    @Body() user: any
  ) {
    return await this.authService.login()
  }
}