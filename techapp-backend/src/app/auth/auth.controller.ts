import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { baseUserDto } from "./dto/base-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { Public } from "./auth.strategy";

@Controller('auth')
@Public()
@ApiTags("auth")
export class AuthController {
    constructor(private authService: AuthService) {}
  
  @Post("signin")
  @ApiResponse({
    status: 200,
    description: "The record found",
    schema: {
      example: {
        message: 'Login successful',
        access_token: 'jwt.token.here',
      },
    },
  })
  signIn(@Body() signInDto: baseUserDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post("signup")
  @Public()
  @ApiResponse({
    status: 200,
    description: "The record found",
    schema: {
      example: {
        message: 'Register successful',
        access_token: 'jwt.token.here',
      },
    },
  })
  signUp(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(
      signUpDto.email, 
      signUpDto.password
    )
  }
}

