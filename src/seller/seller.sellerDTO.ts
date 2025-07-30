import { IsEmail, Matches, MinLength, IsIn, IsString } from 'class-validator';

export class SellerDTO {
  @Matches(/^[\w.+-]+@aiub\.edu$/, {
    message: 'Email must be from aiub.edu domain',
  })
  email: string;

  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  @Matches(/.*[A-Z].*/, {
    message: 'Password must contain at least one uppercase letter',
  })
  password: string;

  @IsIn(['male', 'female'], {
    message: 'Gender must be either male or female',
  })
  gender: string;

  @IsString({
    message: 'Phone number must be a string',
  })
  phone: string;
}