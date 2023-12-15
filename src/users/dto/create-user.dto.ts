import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'johndoe@example.com', description: 'User email' })
    readonly email: string;
    @ApiProperty({ example: '123124124134', description: 'User password' })
    readonly password: string;
}