import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  username:String;
  email:String;
  password: String;

  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

onRegisterSubmit(){
  const User = {
    name:this.name,
    email:this.email,
    username: this.username,
    password: this.password
  }
  // Required Fields
  if(!this.validateService.validateRegister(User)){
    this.flashMessage.show('please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
    return false;
  }
  // Required Fields
  if(!this.validateService.validateEmail(User.email)){
    this.flashMessage.show('please use a valid email', {cssClass: 'alert-danger', timeout:3000});
    return false;
  }
  // Register User
  this.authService.registerUser(User).subscribe(data => {
    if(data.success){
      this.flashMessage.show('Registered Successfully', {cssClass: 'alert-success', timeout:3000});
      // alert("Registered Successfully");
      this.router.navigate(['/account']);
    }
    else{
       this.flashMessage.show('Error In Register', {cssClass: 'alert-danger', timeout:3000});
       this.router.navigate(['/register']);
    }
  });
}
}
