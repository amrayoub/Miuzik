import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { UploadComponent } from '../component/upload/upload.component';
// import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { SettingsComponent } from '../component/settings/settings.component';
import { ChangePasswordComponent } from '../component/change-password/change-password.component';




const userRoutes: Routes = [
    {path: "", component: SettingsComponent},
    {path: "upload", component: UploadComponent},
    {path: "change-password", component: ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
