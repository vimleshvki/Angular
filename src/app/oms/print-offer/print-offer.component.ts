import { Component, OnInit } from '@angular/core';
import { OMSdataService } from '../omsdata.service';

@Component({
  selector: 'app-print-offer',
  templateUrl: './print-offer.component.html',
  styleUrls: ['./print-offer.component.css']
})
export class PrintOfferComponent implements OnInit {

  user_interface_id=121;
  offer_state=5; 
  public data:any=[];

  constructor(private omsService:OMSdataService ) {
    
   
  this.omsService.GetOfferDetailsByState(this.user_interface_id,this.offer_state).subscribe((res)=>{
    this.data=res;
    })
  }


  ngOnInit(): void {
  }

}
