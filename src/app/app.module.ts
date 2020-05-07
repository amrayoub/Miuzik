import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { LoginComponent } from './component/auth/login/login.component';
import { SharedModule } from './shared/modules/shared.module';
import { MusicPlayerService } from './shared/services/music-player.service';
import { httpInterceptorsProviders } from './shared/interceptors';
import { MessagesService } from './shared/services/messages.service';
import { TimePipe } from './shared/pipes/time.pipe';
import { MusicPlayerComponent } from './component/music-player/music-player.component';
import { FetchingComponent } from './component/fetching/fetching.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { SearchComponent } from './component/search/search.component';
import { SongCardComponent } from './component/song-card/song-card.component';
import { ProfileComponent } from './component/users/profile/profile.component';
import { UserCardComponent } from './component/users/user-card/user-card.component';
import { UsersComponent } from './component/users/users.component';
import { UserModule } from './user/user.module';
import { FormsComponent } from './component/search-form/forms/forms.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    TimePipe,
    MusicPlayerComponent,
    FormsComponent,
    FetchingComponent,
    NotFoundComponent,
    SearchComponent,
    SongCardComponent,
    ProfileComponent,
    UserCardComponent,
    UsersComponent,
    MusicPlayerComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    UserModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    })
  ],
  providers: [
    MusicPlayerService,
    MessagesService,
    httpInterceptorsProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
