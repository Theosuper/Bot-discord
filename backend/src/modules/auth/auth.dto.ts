import { IsEmail, IsString, MaxLength, Min, MinLength } from 'class-validator';
export class LoginDto {
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @MaxLength(72)
  password: string;
}

export class RegisterDto {
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @MaxLength(20)
  @MinLength(1)
  name: string;

  @IsString()
  @MaxLength(72)
  password: string;

  @IsString()
  @MaxLength(72)
  confirmPassword: string;
}
