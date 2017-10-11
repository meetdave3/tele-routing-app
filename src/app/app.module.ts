import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';

import { AlgoService } from './shared/algo.service';

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
    FormsModule,
    MdButtonModule,
    MdSelectModule,
    MdInputModule,
    MdToolbarModule
  ],
  providers: [AlgoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
