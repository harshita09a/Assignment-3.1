import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ProductComponent } from './app.productcomponent';



import { HttpClientModule } from '@angular/common/http';
import {FormsModule}from '@angular/forms';
// const routes:Routes=[
//    {path:'add',component:AddEmployeeComponent},
  

// ]; 
@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule
        
    ],
    declarations: [
        AppComponent,ProductComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }