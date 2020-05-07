import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/auth/login/login.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { SearchComponent } from './component/search/search.component';
import { ProfileComponent } from './component/users/profile/profile.component';
import { NotFoundComponent } from './component/not-found/not-found.component';


const routes: Routes = [
  { path: "", component: HomeComponent, children: [
    { path: "login", component: LoginComponent},
    { path: 'signup', component: SignupComponent}
  ]},
  {path: "settings", loadChildren: "./user/user.module#UserModule"},
  {path: "search/:query", component: SearchComponent},
  {path: "user/:query", component: ProfileComponent},
  {path: "404", component: NotFoundComponent},
  {path: "**", redirectTo: "404"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
