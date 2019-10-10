import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexBagroundComponent } from './index-baground/index-baground.component';
import { SearchComponent } from './search/search.component';
import { TraineeLandingComponent } from './trainee-landing/trainee-landing.component';
import { TraineeCompleatedComponent } from './trainee-compleated/trainee-compleated.component';
import { TraineeCurrentComponent } from './trainee-current/trainee-current.component';
import { SearchTrainersComponent } from './search-trainers/search-trainers.component';
import { TrainerSignupComponent } from './trainer-signup/trainer-signup.component';
import { TraineeSignupComponent } from './trainee-signup/trainee-signup.component';
import { TrainerLandingComponent } from './trainer-landing/trainer-landing.component';
import { TrainerEditskillsComponent } from './trainer-editskills/trainer-editskills.component';
import { TrainerCurrentComponent } from './trainer-current/trainer-current.component';
import { TrainerCompleatedComponent } from './trainer-compleated/trainer-compleated.component';
import { TrainerPaymentComponent } from './trainer-payment/trainer-payment.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminSkillComponent } from './admin-skill/admin-skill.component';
import { AdminPaymentreportComponent } from './admin-paymentreport/admin-paymentreport.component';
import { AdminTrainigreportComponent } from './admin-trainigreport/admin-trainigreport.component';
import { AdminUsersaccountComponent } from './admin-usersaccount/admin-usersaccount.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { HeaderSignupComponent } from './header-signup/header-signup.component';
import { HeaderTrainerComponent } from './header-trainer/header-trainer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexBagroundComponent,
    SearchComponent,
    TraineeLandingComponent,
    TraineeCompleatedComponent,
    TraineeCurrentComponent,
    SearchTrainersComponent,
    TrainerSignupComponent,
    TraineeSignupComponent,
    TrainerLandingComponent,
    TrainerEditskillsComponent,
    TrainerCurrentComponent,
    TrainerCompleatedComponent,
    TrainerPaymentComponent,
    AdminLandingComponent,
       AdminSkillComponent,
    AdminPaymentreportComponent,
    AdminTrainigreportComponent,
    AdminUsersaccountComponent,
    HeaderLoginComponent,
    HeaderSignupComponent,
    HeaderTrainerComponent,
    AdminHeaderComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
