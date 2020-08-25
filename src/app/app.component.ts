import { Component } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import{ UserServiceService }from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VKBLOGS';
  public data:any=[];
  public result=[];
  constructor(private user:UserServiceService)
  {

    this.user.getdata().subscribe((res)=>{this.data=res})
  }
}

