import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConceptosListComponent } from './components/conceptos-list/conceptos-list.component';
import { ConceptosFormComponent } from './components/conceptos-form/conceptos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConceptosListComponent,
    ConceptosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
