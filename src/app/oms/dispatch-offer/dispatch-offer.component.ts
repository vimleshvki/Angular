import { Component, OnInit } from '@angular/core';
import { OMSdataService } from '../omsdata.service';

@Component({
  selector: 'app-dispatch-offer',
  templateUrl: './dispatch-offer.component.html',
  styleUrls: ['./dispatch-offer.component.css']
})
export class DispatchOfferComponent implements OnInit {

  user_interface_id=121;
  offer_state=3; 
  public data:any=[];

  constructor(private omsService:OMSdataService ) {
    
   
  this.omsService.GetOfferDetailsByState(this.user_interface_id,this.offer_state).subscribe((res)=>{
    this.data=res;
    })
  }

  ngOnInit(): void {
  }

}
