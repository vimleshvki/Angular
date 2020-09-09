import { Component, OnInit } from '@angular/core';
import { OMSdataService } from '../omsdata.service';

@Component({
  selector: 'app-approve-offer',
  templateUrl: './approve-offer.component.html',
  styleUrls: ['./approve-offer.component.css']
})
export class ApproveOfferComponent implements OnInit {

  user_interface_id=121;
  offer_state=2; 
  public data:any=[];

  constructor(private omsService:OMSdataService ) {
    
   
  this.omsService.GetOfferDetailsByState(this.user_interface_id,this.offer_state).subscribe((res)=>{
    this.data=res;
    })
  }


  ngOnInit(): void {
  }

}
