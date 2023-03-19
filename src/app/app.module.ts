import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiModule, Configuration} from "../../openapi-generator";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule.forRoot(() => {
      return new Configuration({
        basePath: environment.basePath
      })
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
