import { Component, OnInit } from '@angular/core';
import{OMSdataService}from '../omsdata.service';

@Component({
  selector: 'app-accept-offer',
  templateUrl: './accept-offer.component.html',
  styleUrls: ['./accept-offer.component.css']
})
export class AcceptOfferComponent implements OnInit {

  user_interface_id=121;
  offer_state=4; 
  public data:any=[];

  constructor(private omsService:OMSdataService) { 

  this.omsService.GetOfferDetailsByState(this.user_interface_id,this.offer_state).subscribe((res)=>{
    this.data=res;
    })
  }
  

  ngOnInit(): void {
  }

}
