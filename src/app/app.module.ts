import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http"
import {ProfileService} from "./services/profile.service"
import {FormsModule} from '@angular/forms'
import {Routes,RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import {HomeComponent} from './components/home/home.component';
import { FilterPipe } from './pipe/filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';


const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'user', component: ProfileComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    FilterPipe,
    HighlightDirective,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 