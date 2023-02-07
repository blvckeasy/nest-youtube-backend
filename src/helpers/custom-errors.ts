import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomError extends HttpException {
  errorName: string;

  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}