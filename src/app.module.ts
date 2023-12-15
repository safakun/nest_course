import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";


@Module( {
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        UsersModule],
})
export class AppModule {

}