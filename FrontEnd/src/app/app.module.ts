import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/users/login/login.component';
import { SignupComponent } from './pages/users/signup/signup.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RegularClientComponent } from './pages/users/regular-client/regular-client.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LeftMenuComponent,
    MainLayoutComponent,
    RegularClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
