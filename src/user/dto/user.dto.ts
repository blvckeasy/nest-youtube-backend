import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString, IsAlpha, IsAlphanumeric } from "class-validator"


export class UserSearchParamsDto {
  
  @ApiProperty({ required: false })
  @IsString()
  _id?: string

  @ApiProperty({ required: false })
  @IsAlpha()
  fullname?: string

  @ApiProperty({ required: false })
  @IsAlphanumeric()
  username?: string
}

export class UserUpdateParamsDto {
  @ApiProperty({ required: false })
  _id?: string

  @ApiProperty({ required: false })
  fullname?: string

  @ApiProperty({ required: false })
  username?: string
}

export class UserDto {
  @ApiProperty()
  _id?: string

  @ApiProperty({ required: false })
  fullname?: string

  @ApiProperty({ required: true })
  username: string
}

export class UserCreateDto {
  @ApiProperty()
  @IsString()
  _id?: string

  @ApiProperty({ required: false })
  @IsAlpha()
  fullname?: string

  @ApiProperty({ required: true })
  @IsAlphanumeric()
  username: string;
}