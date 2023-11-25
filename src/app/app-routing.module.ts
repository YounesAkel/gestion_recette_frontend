import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';

const routes: Routes = [
  {path:"welcom",component:WelcomeComponent},
  {path:"",pathMatch:'full',redirectTo:"welcome"},

  {path:"seconnecter",component:SeconnecterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
