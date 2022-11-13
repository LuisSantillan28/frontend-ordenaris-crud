import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { AppRoutingModule } from './app-routing.module';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AreaComponent } from './area/area.component';



@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    FormsComponent,
    EmpleadoComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
