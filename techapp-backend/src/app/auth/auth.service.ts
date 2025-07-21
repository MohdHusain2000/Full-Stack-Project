import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) {}
  
    async signIn(email, password) {
    const user = await this.userService.findByEmail(email);
    if (user!) {
      throw new UnauthorizedException();
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
  
    const payload = { sub: user._id, email: user.email };

    return {
      message: 'Login successful',
      access_token: await this.jwtService.signAsync(payload, { expiresIn: '8h' }),
    };
  }

   async signUp(email: string, password: string) {
    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('Email is already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.userService.create(email, hashedPassword);

    const payload = { sub: newUser._id, email: newUser.email };
    
    return {
      message: 'User registered successfully',
      access_token: await this.jwtService.signAsync(payload, { expiresIn: '8h' }),
    };
  }
}
