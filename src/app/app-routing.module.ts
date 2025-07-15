import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'portfolio',component: PortfolioComponent},
  {path:'resume',component: ResumeComponent},
  {path:'contacts',component: ContactsComponent},
  //se sulla URL metto localhost:4200/gnegnengne/gne a prescindere carica la homeComponent attraverso pathmatch
  {path:'**',component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
