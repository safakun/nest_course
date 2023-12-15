import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@Inject(User) private userRepository: typeof User) {

    }

    async createUser() {

    }

    async getAllUsers() {

    }
}


