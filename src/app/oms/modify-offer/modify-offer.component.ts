import { Component,ViewChild, OnInit,Directive,Input } from '@angular/core';
import{CommonModule}from '@angular/common';
import{OMSdataService}from '../omsdata.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-modify-offer',
  templateUrl: './modify-offer.component.html',
  styleUrls: ['./modify-offer.component.css']
})
export class ModifyOfferComponent implements OnInit {
  user_interface_id=121;
  offer_state=1; 
  public data:any=[];

  constructor(private omsService:OMSdataService ) {
    
   
  this.omsService.GetOfferDetailsByState(this.user_interface_id,this.offer_state).subscribe((res)=>{
    this.data=res;
    })
  }


  ngOnInit(): void {
  }
}
