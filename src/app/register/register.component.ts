import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Util} from '../../util/Util';
import {RegisterData} from '../../model/RegisterData';

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
    if (this.userName === '' || this.userPassword === '') {
      alert('wrong Inputs!');
    } else {

      const params = {
        userName: this.userName,
        userSurname: this.userSurname,
        userPhone: this.userPhone,
        userMail: this.userMail,
        userPass: this.userPassword
      };
      this.util.userRegister(params).subscribe(resp => {
        const dt: RegisterData | any = resp;
        if (dt.user[0].durum) {
          console.log(JSON.stringify(dt));
        } else {
          alert('Register Failed!');
        }
      });
    }
  }
}
