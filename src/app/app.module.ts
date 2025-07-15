import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ModalModule} from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {AccordionModule} from 'ngx-bootstrap/accordion'
import { FormsModule } from '@angular/forms';
import { UrlToLabelPipe } from './pipes/url-to-label.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactsComponent,
    ProjectCardComponent,
    ProjectModalComponent,
    UrlToLabelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],//aggiungo collegamento icone messe su index.html cosi importo le icone
  bootstrap: [AppComponent]
})
export class AppModule { }
