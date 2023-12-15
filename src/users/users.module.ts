import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database.module';
import { usersProviders } from './users.providers';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService, 
  ...usersProviders],
  imports: [DatabaseModule, Role, UserRoles],
})
export class UsersModule {}
