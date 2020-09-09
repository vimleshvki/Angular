import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userservice: UserServiceService, private router: Router) {

  }

  ngOnInit(): void {
    //alert("page load");
    this.getdatawithoutparameter();

    this.getdatawithparameter(1);

    var testData = new Login();
    testData.userid = 'Admin';
    testData.password = 'password';

    this.getdatawithPostrequesModel(testData);

  }

  getdatawithoutparameter() {
    this.userservice.getdatawithoutparameter().subscribe((res) => {
      //alert("getdatawithoutparameter" + res);
    })
  }

  getdatawithparameter(id: number) {
    this.userservice.getdatawithparameter(id).subscribe((result) => {
      //alert("getdatawithparameter" + result);
    });

  }

  getdatawithPostrequesModel(login: Login) {
    this.userservice.getdatawithPostrequesModel(login).subscribe(
      data => {
        var success = data;
        if (data) {
          //alert("getdatawithPostrequesModel" + data.userid +"," +data.password);
        }
        else {
          //alert("no data");
        }
      }
    )

  }

  txtUsername: string = "";
  txtPassword: string = "";


  LoginFunction(username, password) {
    var userdata = new Login();
    userdata.userid = username.value;
    userdata.password = password.value;
    this.userservice.UserLogin(userdata).subscribe
      (
        data => {
          var success = data;
          console.warn(data);
          if (data) {
            localStorage.setItem("user_interface_id", data.user_interface_id);
            localStorage.setItem("userdata", JSON.stringify(data));
            this.router.navigate(['/dashboard']);
          }
          else {
            //alert("Invalid Id/Password");
          }
        })
  }

}
