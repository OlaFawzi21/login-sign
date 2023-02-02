import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  userModel = new User("","","","","");




  ngOnInit(): void {
  }

}
