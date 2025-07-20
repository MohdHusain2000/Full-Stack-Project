import { ApiProperty } from '@nestjs/swagger';
import { baseUserDto } from './base-user.dto';

export class CreateUserDto extends baseUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  confirmPassword: string;
}
