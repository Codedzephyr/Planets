import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EarthComponent} from './pages/earth/earth.component';
import {JupiterComponent} from './pages/jupiter/jupiter.component';
import {MarsComponent} from './pages/mars/mars.component';
import {MercuryComponent} from './pages/mercury/mercury.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NeptuneComponent} from './pages/neptune/neptune.component';
import {SaturnComponent} from './pages/saturn/saturn.component';
import {UranusComponent} from './pages/uranus/uranus.component';
import {VenusComponent} from './pages/venus/venus.component';

const routes: Routes = [
  {path: '',      component:MercuryComponent, pathMatch: 'full'},
  {path: 'venus', component:VenusComponent,  pathMatch: 'full'},
  {path: 'earth', component:EarthComponent,  pathMatch: 'full'},
  {path: 'mars',   component:MarsComponent,  pathMatch: 'full'},
  {path: 'jupiter', component:JupiterComponent,  pathMatch: 'full'},
  {path: 'saturn', component:SaturnComponent,  pathMatch: 'full'},
  {path: 'uranus', component:UranusComponent,   pathMatch: 'full'},
  {path: 'neptune', component:NeptuneComponent,  pathMatch: 'full'},
  {path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
