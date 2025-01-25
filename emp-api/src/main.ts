import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Employees API')
    .setDescription('The employees API')
    .setVersion('1.0')
    .addTag('employee')
    .build();

  app.enableCors({
    origin: true,
  });
  app.setGlobalPrefix('api/v1');
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
