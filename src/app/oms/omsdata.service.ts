import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { from, Observable } from 'rxjs';
import{ Router }from '@angular/router';
import{OfferDetails}from './offer-details';

@Injectable({
  providedIn: 'root'
})
export class OMSdataService {

  constructor(private httpClient:HttpClient,) { }
  baseURL="http://localhost/MyRadar.Api/api/";

  GetOfferDetailsByState(user_interfce_id:number,offer_state:number)
  {
    return this.httpClient.get(this.baseURL + "OMS/GetOfferDetailsByState"+"?user_interface_id="+user_interfce_id+"&offer_state="+offer_state);
  }

  SaveOfferDetails(data:OfferDetails)
  {
    return this.httpClient.post(this.baseURL + "OMS/SaveOfferDetails",data);
  }
}
