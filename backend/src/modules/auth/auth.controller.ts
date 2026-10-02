import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAuth() {
    return this.authService.getInitialMessage();
  }
}
