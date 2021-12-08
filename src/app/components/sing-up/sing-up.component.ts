import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
})
export class SingUpComponent implements OnInit {
  constructor(private authService: AuthService) {}

  email = '';
  password = '';

  ngOnInit(): void {}

  onSubmit() {
    console.log('Data is valid');
    this.authService.emailSingUp(this.email, this.password);
  }
}
