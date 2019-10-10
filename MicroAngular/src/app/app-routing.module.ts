import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { TraineeLandingComponent } from './trainee-landing/trainee-landing.component';
import { TraineeCompleatedComponent } from './trainee-compleated/trainee-compleated.component';
import { TraineeCurrentComponent } from './trainee-current/trainee-current.component';
import { SearchTrainersComponent } from './search-trainers/search-trainers.component';
import { TrainerSignupComponent } from './trainer-signup/trainer-signup.component';
import { TraineeSignupComponent } from './trainee-signup/trainee-signup.component';
import { IndexBagroundComponent } from './index-baground/index-baground.component';
import { TrainerLandingComponent } from './trainer-landing/trainer-landing.component';
import { TrainerEditskillsComponent } from './trainer-editskills/trainer-editskills.component';
import{TrainerCompleatedComponent} from './trainer-compleated/trainer-compleated.component';
import{TrainerCurrentComponent} from './trainer-current/trainer-current.component';
import{TrainerPaymentComponent} from './trainer-payment/trainer-payment.component';
import{AdminLandingComponent} from './admin-landing/admin-landing.component';
import{AdminPaymentreportComponent} from './admin-paymentreport/admin-paymentreport.component';
import{AdminSkillComponent} from './admin-skill/admin-skill.component';
import{AdminTrainigreportComponent} from './admin-trainigreport/admin-trainigreport.component';
import{AdminUsersaccountComponent} from './admin-usersaccount/admin-usersaccount.component';
import{ AdminLoginComponent} from './admin-login/admin-login.component'
const routes: Routes = [
  {
    path: '', component: IndexBagroundComponent,

  },
  {
path:'admin',component:AdminLoginComponent,
  },
  {
    path: 'trainer-current', component: TrainerCurrentComponent,

  },
  {
    path: 'admin-paymentreport', component: AdminPaymentreportComponent,

  },
  {
    path: 'admin-skill', component: AdminSkillComponent,

  },
  {
    path: 'admin-trainingreport', component: AdminTrainigreportComponent,

  },
  {
    path: 'admin-useraccount', component: AdminUsersaccountComponent,

  },
  {
    path: 'admin-landing', component: AdminLandingComponent,

  },
  {
    path: 'trainer-payment', component: TrainerPaymentComponent,

  },
  {
    path: 'trainer-editskills', component: TrainerEditskillsComponent,

  },
  {
    path: 'trainer-compleated', component: TrainerCompleatedComponent,

  },
  {
    path: 'trainer-landing', component: TrainerLandingComponent,

  },
  {
    path: 'search', component: SearchComponent,

  },
  {
    path: 'trainee-landing', component: TraineeLandingComponent
  },
  {
    path: 'trainee-compleated', component: TraineeCompleatedComponent
  },
  {
    path: 'trainee-current', component: TraineeCurrentComponent
  },
  {
    path: 'search-trainers', component: SearchTrainersComponent
  },
  {
    path: 'trainer-signup', component: TrainerSignupComponent
  },
  {
    path: 'trainee-signup', component: TraineeSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
