import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudWithApiComponent } from './crud-with-api/crud-with-api.component';
import {HttpClientModule} from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';
import { LoginComponent } from './login/login.component';
import{OmsModule}from './oms/oms.module';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import{ActivateGuard}from'./activate.guard';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import{ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LeftMenuComponent,
    UserComponent,
    AdminComponent,
    PageNotFoundComponent,
    AboutusComponent,
    ContactusComponent,
    DashboardComponent,
    CrudWithApiComponent,
    DataTableComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OmsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  providers: [ActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
