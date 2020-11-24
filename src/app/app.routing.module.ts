import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { PassionComponent } from './passion/passion.component';
import { WorkComponent } from './work/work.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'passion', component: PassionComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'work', component: WorkComponent },
    { path: 'contact', component: ContactComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
