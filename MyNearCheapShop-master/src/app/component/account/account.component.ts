import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  username:String;
  password:String;

  constructor(private authService: AuthService,
              private flashMessage: FlashMessagesService,
              private router: Router) { }

  ngOnInit() {
  }

onLoginSubmit(){
  // console.log("user login");
  const user = {
    username: this.username,
    password: this.password
  }
  this.authService.authenticateUser(user).subscribe(data => {
    // console.log(data);
    if(data.success){
      this.authService.storeUserData(data.token, data.user);
      this.flashMessage.show('You are now logged In', {cssClass:'alert-success', timeout:5000});
      this.router.navigate(['dashboard']);
    }else{
      this.flashMessage.show(data.msg, {cssClass:'alert-danger', timeout:5000});
      this.router.navigate(['login']);
    }
  });
}

}
