import { ApiProperty } from "@nestjs/swagger";
import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/users.model";


interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {

    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'My new post', description: 'Post title' })
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({ example: 'Text of the post', description: 'Post content' })
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({ example: 'imageName.jpg', description: 'Post image' })
    @Column({type: DataType.STRING})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ApiProperty({ example: 'John Doe', description: 'Author of the post' })
    @BelongsTo(() => User)
    author: User

}