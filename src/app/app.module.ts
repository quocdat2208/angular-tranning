import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent } from './app.component';
import {fakeBackendProvider} from './core/services/fake-backend';
import {AccountService} from './core/services/account.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule } from '../material.module'
import {MatNativeDateModule} from '@angular/material/core';

import { TestComponent } from './core/components/test/test.component';
import { TableComponent } from './core/components/table/table.component';


@NgModule({
  declarations: [AppComponent, TestComponent, TableComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountService,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
