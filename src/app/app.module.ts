import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import {FormsModule} from '@angular/forms';
import { IFocusDirective } from './directives/i-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective,
    IFocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
