import { GetAuthComponent } from './auth/get-auth/get-auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetTracksComponent } from './get-tracks/get-tracks.component';


const routes: Routes = [
  { path: '', component: GetAuthComponent},
  { path: 'home', component: GetTracksComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }