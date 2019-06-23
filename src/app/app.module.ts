import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataviewComponent } from './dataview/dataview.component';
import { PanelModule } from './component/panel/panel';
import { DataViewModule } from './component/dataview/dataview';
import { ButtonModule } from './component/button/button';
import { DropdownModule } from './component/dropdown/dropdown';
import { DialogModule } from './component/dialog/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DataviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    DropdownModule,
    DataViewModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
