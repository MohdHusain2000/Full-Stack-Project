import { ApiProperty } from '@nestjs/swagger';
import { UserProperties } from './base-user.dto';

export class CreateUserDto extends UserProperties {
  @ApiProperty()
  username: string;

  @ApiProperty()
  confirmPassword: string;
}
