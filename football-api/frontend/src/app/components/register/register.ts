import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  register() {
    this.authService
      .register(
        this.username,
        this.password,
      )
      .subscribe({
        next: () => {
          alert(
            'Usuario creado correctamente',
          );

          this.router.navigate([
            '/login',
          ]);
        },

        error: () => {
          alert(
            'Error creando usuario',
          );
        },
      });
  }
}