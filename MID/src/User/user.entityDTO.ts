import { IsString, Matches, MinLength, IsNumberString } from 'class-validator';

export class userDTO {
  @IsString()
  @Matches(/^[a-zA-Z\s]+$/, { message: 'Name must not contain special characters' })
  name: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @Matches(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  password: string;

  @IsNumberString({}, { message: 'Phone number must be numeric' })
  @Matches(/^01[0-9]{9}$/, { message: 'Phone number must start with 01 and have 11 digits' })
  phoneNo: string;
}
