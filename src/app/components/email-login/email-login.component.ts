import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css'],
})
export class EmailLoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  email = '';
  password = '';

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.login(this.email, this.password);
  }
}
