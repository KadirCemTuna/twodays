import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Util} from '../../util/Util';

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

  constructor(private util: Util) {
  }

  ngOnInit(): void {
  }

  fncUserRegister(): void {
    const params = {
      userName: this.userName,
      userSurname: this.userSurname,
      userPhone: this.userPhone,
      userMail: this.userMail,
      userPass: this.userPassword
    };
    this.util.userRegister(params).subscribe(resp => {
      console.log(JSON.stringify(resp));
    });
  }
}
