import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HeadertopComponent } from './header/headertop.component';
import { HeaderbottomComponent } from './header/headerbottom.component';
import { BodyComponent } from './body/body.component';
import { WalletComponent } from './wallet.component';


const appRoutes: Routes = [
  { path: '',      component: WalletComponent},
  { path: 'header',      component: HeaderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadertopComponent,
    HeaderbottomComponent,
    BodyComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JsonpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
