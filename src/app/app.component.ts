import { Component } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VKBLOGS';


  name:string='vimlesh'
  fullname='vimlesh kumar'
  a=10;
  b=100;
  sum(n1,n2)
  {
    this.a=n1;
    this.b=n2;
    return this.a+this.b;
  }
}

