import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Coma tomates!';
  }
  getTomate(): string {
    return 'Tomate é bao demais';
  }
}
