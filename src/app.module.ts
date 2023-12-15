import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { RolesModule } from './roles/roles.module';
import { UserRoles } from "./roles/user-roles.model";


@Module( {
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        UsersModule,
        RolesModule, 
        UserRoles,
    ],
})
export class AppModule {

}