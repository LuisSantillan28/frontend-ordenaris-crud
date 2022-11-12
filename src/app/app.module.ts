import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
