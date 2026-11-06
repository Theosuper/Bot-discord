import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AppService } from '../../app.service.js';
import { AuthService } from './auth.service.js';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'uma-senha-super-segura',
      signOptions: {
        expiresIn: '7h',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
