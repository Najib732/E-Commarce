import { 
  IsString, 
  Matches, 
  IsNotEmpty 
} from 'class-validator';

export class AdminDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @Matches(/^[A-Za-z]+$/, { message: 'Name must contain only alphabets' })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @Matches(/^[\w.-]+@[\w.-]+\.xyz$/, { message: 'Email must be a valid .xyz address' })
  email: string;

  @IsNotEmpty({ message: 'NID Number is required' })
  @Matches(/^\d{4}-\d{4}-\d{4}$/, { message: 'NID must be in format XXXX-XXXX-XXXX' })
  nidNumber: string;
}
