import { Component, OnInit } from '@angular/core';
import{ UserServiceService }from './../user-service.service';

@Component({
  selector: 'app-crud-with-api',
  templateUrl: './crud-with-api.component.html',
  styleUrls: ['./crud-with-api.component.css']
})
export class CrudWithApiComponent implements OnInit {

  public data:any=[];
  public result=[];
  constructor(private user:UserServiceService)
  {

    this.user.getdata().subscribe((res)=>{
      console.warn(res)
      this.data=res})

  }


  ngOnInit(): void {
  }

}
