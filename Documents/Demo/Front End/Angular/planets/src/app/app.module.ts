import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {CountUpModule}  from 'ngx-countup';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EarthComponent } from './pages/earth/earth.component';
import { MercuryComponent } from './pages/mercury/mercury.component';
import { VenusComponent } from './pages/venus/venus.component';
import { MarsComponent } from './pages/mars/mars.component';
import { JupiterComponent } from './pages/jupiter/jupiter.component';
import { SaturnComponent } from './pages/saturn/saturn.component';
import { UranusComponent } from './pages/uranus/uranus.component';
import { NeptuneComponent } from './pages/neptune/neptune.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EarthComponent,
    MercuryComponent,
    VenusComponent,
    MarsComponent,
    JupiterComponent,
    SaturnComponent,
    UranusComponent,
    NeptuneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
