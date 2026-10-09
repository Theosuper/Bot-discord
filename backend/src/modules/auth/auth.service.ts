import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
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
}
