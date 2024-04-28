import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  path = '';

  validateUser() {
    if (this.email === 'chetan@gmail.com' && this.password === 'chetan') {
      this.path = 'home';
    }
  }
}
