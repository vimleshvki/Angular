import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { ModifyOfferComponent } from './modify-offer/modify-offer.component';
import { ApproveOfferComponent } from './approve-offer/approve-offer.component';
import { DispatchOfferComponent } from './dispatch-offer/dispatch-offer.component';
import { AcceptOfferComponent } from './accept-offer/accept-offer.component';
import { JoinOfferComponent } from './join-offer/join-offer.component';
import { PrintOfferComponent } from './print-offer/print-offer.component';



@NgModule({
  declarations: [CreateOfferComponent, ModifyOfferComponent, ApproveOfferComponent, DispatchOfferComponent, AcceptOfferComponent, JoinOfferComponent, PrintOfferComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CreateOfferComponent,
    ModifyOfferComponent,
    ApproveOfferComponent,
    DispatchOfferComponent,
    AcceptOfferComponent,
    JoinOfferComponent,
    PrintOfferComponent
  ]
})
export class OmsModule { }
