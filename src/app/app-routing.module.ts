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
import { from } from 'rxjs';
const routes: Routes = [
  {
    path:'dataTable',
    component:DataTableComponent
  },
{
  path:'crudwithapi',
  component:CrudWithApiComponent
},
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'user',
  component:UserComponent
},
{
  path:'admin',
  component:AdminComponent
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
