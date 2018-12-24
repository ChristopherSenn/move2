import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthGuard } from './guards/auth.guard';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';

import {JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './interceptors';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

     // provider used to create fake backend
    fakeBackendProvider

  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
