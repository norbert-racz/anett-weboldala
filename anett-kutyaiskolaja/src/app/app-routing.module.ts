import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { ReferenciaComponent } from './referencia/referencia.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'referencia', component: ReferenciaComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
