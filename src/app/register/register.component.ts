import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  frmRegister: any;
  userName = '';
  userSurname = '';
  userPhone = '';
  userMail = '';
  userPassword = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  fncUserRegister(data: any): void{

  }
}
