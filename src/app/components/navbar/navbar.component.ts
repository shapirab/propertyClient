import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: LoginService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  register(){
    console.log('register() called')
  }

  login(){
    this.dialog.open(LoginDialogComponent);
  }

  logout(){
    this.loginService.logout();
  }

}
