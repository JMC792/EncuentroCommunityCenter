import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component' ;
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent} from './services/services.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Questions', component: QuestionsComponent},
  { path: 'Contact Us', component: ContactUsComponent },
  { path: 'About', component: AboutComponent },
  {path: 'Services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
