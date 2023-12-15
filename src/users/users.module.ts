import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database.module';
import { usersProviders } from './users.providers';

@Module({
  controllers: [UsersController],
  providers: [UsersService, 
  ...usersProviders],
  imports: [DatabaseModule],
})
export class UsersModule {}
