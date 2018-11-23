import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './tabs/home/home.component';
import { AboutComponent } from './tabs/about/about.component';
import { PrepareRouteComponent } from './core/prepare-route/prepare-route.component';
import { ContactComponent } from './tabs/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    ContactComponent,
    AboutComponent,
    PrepareRouteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
