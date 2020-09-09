import { Component, OnInit } from '@angular/core';
import{OfferDetails}from '../offer-details';
import{OMSdataService}from '../omsdata.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {

  private data:OfferDetails;


  constructor(private service:OMSdataService ) { 
    
  }

  
  ngOnInit(): void {
  }

}
