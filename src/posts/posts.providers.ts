import { Post } from "./posts.model";

export const postsProviders = [
    {
        provide: 'POSTS_REPOSITIRY',
        useValue: Post,

    },
];