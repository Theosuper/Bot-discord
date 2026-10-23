import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from '../database/entities/user.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto, RegisterDto } from './auth.dto.js';
//biblioteca de criar criptografia
import * as bcript from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  getInitialMessage() {
    return 'Opa autenticado';
  }

  async login(payload: LoginDto) {
    const { email, password } = payload;
    const hashPassword = await bcript.hash(
      password,
      12, // quantidade de embaralhamento da senha
    );
    const user = await this.userRepository.findOneBy({
      email,
    });
    if (!user) {
      throw new BadRequestException('Não existe um usuário com esse email!');
    }

    return user;
  }

  async register(payload: RegisterDto) {
    const { confirmPassword, email, name, password } = payload;
    if (confirmPassword !== password) {
      throw new BadRequestException('As senhas não batem');
    }
    //checar se já não existe esse usuário
    const alreadyExistUser = await this.userRepository.exists({
      where: {
        email,
      },
    });
    if (alreadyExistUser) {
      throw new BadRequestException('Já existe um usuário com este email!');
    }
    const hashPassword = await bcript.hash(
      password,
      12, // quantidade de embaralhamento da senha
    );
    console.log(email);
    console.log(name);
    const newUser = await this.userRepository.save({
      email,
      name,
      password: hashPassword,
    });

    const user = await this.userRepository.findOneBy({ id: newUser.id });
    return user;
  }
}
