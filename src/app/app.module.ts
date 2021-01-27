import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
// import { MatSelectModule } from '@angular/material';
// import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { SelectDropDownModule } from 'ngx-select-dropdown'

import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { UiSwitchModule } from 'ngx-toggle-switch';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, NgxSliderModule,SelectDropDownModule,UiSwitchModule
  ],
  // exports:[ BrowserModule,
  //   MatSliderModule,
  //   BrowserAnimationsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
