/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CredentialsDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}
