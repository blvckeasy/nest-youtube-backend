import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger' 
import { join } from 'path'
import { HttpExceptionFilter } from 'src/helpers/http-exception.filter'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: false
  });
  const PORT = process.env.PORT || 3000

  const config = new DocumentBuilder()
    .setTitle("Nestjs")
    .setDescription("Documentation")
    .setVersion("1.0.0")
    .addTag("blvckeasy")
    .build()
  
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/api/docs", app, document)

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs')

  app.enableCors({
    origin: "*",
  })

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, function () {
    console.log(`server is listening on *${PORT}`)
  });
}

bootstrap();