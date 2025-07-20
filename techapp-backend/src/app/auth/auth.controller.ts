import { Body, Controller, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserProperties } from "./dto/base-user.dto";

@Controller('auth')
@ApiTags("auth")
export class AuthController {
    constructor(private authService: AuthService) {}
  
  @Post("SignIn")
  @ApiResponse({
    status: 200,
    description: "The record found",
    type: [UserProperties],
  })
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post("signUp")
  @ApiResponse({
    status: 200,
    description: "The record found",
    type: [UserProperties],
  })
  signUp(@Body() signUpDto: Record<string, any>) {
    const payload = {
      username: signUpDto.username, 
      email: signUpDto.email, 
      password: signUpDto.password,
      createdAt: new Date()
    }
    return this.authService.signUp(payload);
  }
}

