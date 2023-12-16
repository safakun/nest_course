import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './posts.model';
import { postsProviders } from './posts.providers';

@Module({
  controllers: [PostsController],
  providers: [PostsService,
  ...postsProviders],
  imports: [Post]
})
export class PostsModule {}
