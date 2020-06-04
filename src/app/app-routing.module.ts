import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  {path: 'carta', component: BodyComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'carta' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }