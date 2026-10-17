import { Injectable } from '@nestjs/common';
import { UserEntity } from '../database/entities/user.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    userRepository: Repository<UserEntity>,
  ) {}

  getInitialMessage() {
    return 'Opa autenticado';
  }

  login() {
    return {
      id: 14,
      nome: 'Tomate',
      email: 'tomate@tomate.com',
      token: '12312saddasd123',
    };
  }

  register() {
    return {
      id: 14,
      nome: 'Tomate',
      email: 'tomate@tomate.com',
      password: '12345',
      confirmPassword: '12345',
      token: '12312saddasd123',
    };
  }
}
