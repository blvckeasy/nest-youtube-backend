import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { APP_FILTER } from '@nestjs/core'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration'  
import { HttpExceptionFilter } from './helpers/http-exception.filter'

// process.env.MONGODB_URL

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [configuration]
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
})

export class AppModule {}