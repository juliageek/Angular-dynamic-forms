import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { ExistingUserPageComponent } from './existing-user-page/existing-user-page.component';
import { DynamicUserFormComponent } from './existing-user-page/dynamic-user-form/dynamic-user-form.component';
import { DynamicFormFieldComponent } from './existing-user-page/dynamic-form-field/dynamic-form-field.component';

import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';
import { SharedService } from './_services/shared.service';
import { FieldControlService } from './_services/field-control.service';

import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'existing-user', component: ExistingUserPageComponent, canActivate: [AuthGuard] },
    { path: 'new-user', component: NewUserFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    NewUserFormComponent,
    ExistingUserPageComponent,
    DynamicUserFormComponent,
    DynamicFormFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
      AuthService,
      UserService,
      SharedService,
      FieldControlService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
