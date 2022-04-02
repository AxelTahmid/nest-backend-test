import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PasswordProvider } from './providers/password';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, UsersService, PrismaService, PasswordProvider],
})
export class AppModule {}
