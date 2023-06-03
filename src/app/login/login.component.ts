import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService){}
  postsvalue: any;

    userLogin(data: any) {
    this.userService.login(data)
  }

  ngOnInit()
  {
    this.userService.getposts()
    .subscribe((postData =>{
      this.postsvalue = postData;
    }))
  }
}
