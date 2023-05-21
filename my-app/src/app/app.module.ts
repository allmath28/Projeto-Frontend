import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { CardComponentComponent } from './shared/card-component/card-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatListModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
