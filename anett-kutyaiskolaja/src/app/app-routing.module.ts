import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { ReferenciaComponent } from './referencia/referencia.component';

const routes: Routes = [
  {path: 'anett-weboldala/landing', component: LandingComponent},
  {path: 'anett-weboldala/referencia', component: ReferenciaComponent},
  {path: '**', component: LandingComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
