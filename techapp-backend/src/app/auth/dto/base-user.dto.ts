//https://medium.com/@awaisshaikh94/a-detailed-guide-on-implementing-authentication-in-nestjs-4a347ce154b6

import { ApiProperty } from '@nestjs/swagger';

export class baseUserDto {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}