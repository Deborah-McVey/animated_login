import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule], //do without modules
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;

  constructor(private http: HttpClient) {
    this.loginObj = new Login();
  }
// do a login service
  onLogin() {
    debugger;
    this.http.post('https://randomuser.me/api/', this.loginObj).subscribe((res:any) => {
      if(res.result) {
        alert('Login Success')
      } else {
        alert(res.message)
      }
    })
  }
}

//login model
export class Login {
  /* "email": "ostromov.strukevich@example.com",
  "password": "1234" */
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = ''
  }
}
