import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoggedinUserDto } from 'src/app/Models/dto/loggedinUserDto';
import { UserDto } from 'src/app/Models/dto/userDto';
import { User } from 'src/app/Models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  user: UserDto = {
    username: '',
    password: ''
  };
  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.user).subscribe({
      next: () => {
        this.loginService.currentUser$.subscribe({
          next: (user) => console.log(user)
        });
        this.dialogRef.close();
      },
      error: err => console.log(err)
    });
  }

  cancelLogin(){
    this.dialogRef.close();
  }

}
