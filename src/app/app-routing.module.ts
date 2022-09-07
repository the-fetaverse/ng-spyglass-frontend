import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { GoalsViewComponent } from './components/goals-view/goals-view.component';
import { GoalsCreateComponent } from './components/goals-create/goals-create.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'user/:username/goals',
    component: GoalsViewComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'user/:username/goals/add',
    component: GoalsCreateComponent,
    canActivate: [RouteGuardService],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
