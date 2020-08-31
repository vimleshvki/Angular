import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent}from './user/user.component';
import{AdminComponent}from './admin/admin.component';
import{PageNotFoundComponent}from'./page-not-found/page-not-found.component';
import{AboutusComponent}from'./aboutus/aboutus.component';
import{ContactusComponent}from'./contactus/contactus.component';
import{DashboardComponent}from'./dashboard/dashboard.component';
import{CrudWithApiComponent}from'./crud-with-api/crud-with-api.component';
import{DataTableComponent}from './data-table/data-table.component';
import{LoginComponent}from'./login/login.component';
import{CreateOfferComponent}from'./oms/create-offer/create-offer.component';
import { from } from 'rxjs';
import { ModifyOfferComponent } from './oms/modify-offer/modify-offer.component';
import { ApproveOfferComponent } from './oms/approve-offer/approve-offer.component';
import { DispatchOfferComponent } from './oms/dispatch-offer/dispatch-offer.component';
import { AcceptOfferComponent } from './oms/accept-offer/accept-offer.component';
import { JoinOfferComponent } from './oms/join-offer/join-offer.component';
import { PrintOfferComponent } from './oms/print-offer/print-offer.component';
import { HomeComponent } from './home/home.component';
import{ActivateGuard}from './activate.guard';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'createoffer',
    component:CreateOfferComponent, canActivate:[ActivateGuard]
  },
  {
    path:'modifyoffer',
    component:ModifyOfferComponent, canActivate:[ActivateGuard]
  },
  {
    path:'approveoffer',
    component:ApproveOfferComponent, canActivate:[ActivateGuard]
  },
  {
    path:'dispatchoffer',
    component:DispatchOfferComponent, canActivate:[ActivateGuard]
  },
  {
    path:'acceptoffer',
    component:AcceptOfferComponent, canActivate:[ActivateGuard]
  },
  {
    path:'joineoffer',
    component:JoinOfferComponent, canActivate:[ActivateGuard]
  },
  {
    path:'printoffer',
    component:PrintOfferComponent, canActivate:[ActivateGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dataTable',
    component:DataTableComponent, canActivate:[ActivateGuard]
  },
{
  path:'crudwithapi',
  component:CrudWithApiComponent, canActivate:[ActivateGuard]
},
{
  path:'dashboard',
  component:DashboardComponent, canActivate:[ActivateGuard]
},
{
  path:'user',
  component:UserComponent, canActivate:[ActivateGuard]
},
{
  path:'admin',
  component:AdminComponent, canActivate:[ActivateGuard]
},
{
  path:'aboutus',
  component:AboutusComponent
},
{
  path:'contactus',
  component:ContactusComponent
},
{
  path:'**',
  component:PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
