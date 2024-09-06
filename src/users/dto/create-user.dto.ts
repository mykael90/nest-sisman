import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsDateString,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minLowercase: 0,
    minUppercase: 0,
    minNumbers: 0,
    minSymbols: 0,
  })
  password: string;

  @IsOptional()
  @IsDateString()
  birthAt?: string | Date | null;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
