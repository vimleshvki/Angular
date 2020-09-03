import { Component, OnInit } from '@angular/core';
import{UserServiceService}from '../user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userservice:UserServiceService) { }

  ngOnInit(): void {
  }

  logoutFunction(){
    //localStorage.removeItem('user_interface_id');
    //localStorage.removeItem('userdata');
debugger;
    this.userservice.logoutUser();
  }

}
