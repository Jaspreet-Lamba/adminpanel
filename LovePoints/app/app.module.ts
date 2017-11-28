import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from './services/authentication.service';
import { AuthenticationService } from './services/authentication.service';
import {AllRoutes} from './route';
import { AppComponent } from './app.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { AddheadingComponent } from './addheading/addheading.component';
import { KnowledgebasedataService } from './services/knowledgebasedata.service';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { DataexchangeService } from './services/dataexchange.service';
import { Configuration } from './config';
import { SearchdisplayComponent } from './searchdisplay/searchdisplay.component';
import { ShowdataComponent } from './showdata/showdata.component';

// const AllRoutes = Configuration.AllRoutes;

@NgModule({
  declarations: [
    AppComponent,
    MainbodyComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    UsersComponent,
    AddheadingComponent,
    ContactsComponent,
    AboutComponent,
    TermsComponent,
    SearchdisplayComponent,
    ShowdataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AllRoutes)
  ],
  entryComponents: [],
  providers: [KnowledgebasedataService, DataexchangeService, AuthenticationService, Configuration, CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
