import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-standard-ui-homepage',
  imports: [CommonModule,RouterLink],
  templateUrl: './standard-ui-homepage.html',
  styleUrl: './standard-ui-homepage.css',
})
export class StandardUiHomepage {}
