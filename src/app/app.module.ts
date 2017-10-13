import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdSelectModule,
  MdInputModule,
  MdToolbarModule
} from '@angular/material';

import { AlgoService } from './shared/algo.service';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    MdButtonModule,
    MdSelectModule,
    MdInputModule,
    MdToolbarModule
  ],
  providers: [AlgoService, AppService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
