import { NgModule } from '@angular/core';
import { UploadComponent } from '../component/upload/upload.component';
import { SettingsComponent } from '../component/settings/settings.component';
import { ChangePasswordComponent } from '../component/change-password/change-password.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { UserRoutingModule } from './user-routing.module';
//import { AuthService } from '../shared/services/auth.service';
import { MessagesService } from '../shared/services/messages.service';


@NgModule({
    declarations: [
        UploadComponent,
        SettingsComponent,
        ChangePasswordComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        UserRoutingModule
    ],
    providers: [
        // AuthService,
        MessagesService,
    ]
})
export class UserModule{

}