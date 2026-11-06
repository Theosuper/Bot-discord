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
    const userWithPassword = await this.userRepository.findOne({
      where: { email },
      select: {
        id: true,
        password: true,
      },
    });
    if (!userWithPassword) {
      throw new BadRequestException('Não existe um usuário com esse email!');
    }
    console.log('user', userWithPassword);
    const passwordIsEqual = await bcript.compare(
      password,
      userWithPassword.password, // quantidade de embaralhamento da senha
    );
    if (!passwordIsEqual) {
      throw new BadRequestException('Senha incorreta!');
    }
    const user = await this.userRepository.findOne({
      where: { id: userWithPassword.id },
    });
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
