import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';
import { Role } from './roles.model';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [User, UserRoles, Role]
})
export class RolesModule {}
