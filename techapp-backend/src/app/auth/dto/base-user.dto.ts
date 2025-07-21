import { ApiProperty } from '@nestjs/swagger';

export class baseUserDto {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}