import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ProgressBarAngularModule } from "progress-bar-angular";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllcomponentsComponent } from './components/allcomponents/allcomponents.component';
import { FormsModule } from '@angular/forms';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditResumeComponent } from './components/resume/edit-resume.component';
import { AddCursosComponent } from './components/cursos/add-cursos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EditCursoComponent } from './components/cursos/edit-curso.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { AddEducacionComponent } from './components/educacion/add-educacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaPComponent } from './components/expProfesional/experiencia-p.component';
import { EditExperienciaPComponent } from './components/expProfesional/edit-experiencia-p.component';
import { AddExperienciaPComponent } from './components/expProfesional/add-experiencia-p.component';
import { ProyectosComponent } from './components/portfolio/proyectos.component';
import { AddProyectoComponent } from './components/portfolio/add-proyecto.component';
import { EditProyectoComponent } from './components/portfolio/edit-proyecto.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    LoginComponent,
    AllcomponentsComponent,
    EditAboutComponent,
    EditResumeComponent,
    AddCursosComponent,
    CursosComponent,
    EditCursoComponent,
    EditEducacionComponent,
    AddEducacionComponent,
    EducacionComponent,
    ExperienciaPComponent,
    EditExperienciaPComponent,
    AddExperienciaPComponent,
    ProyectosComponent,
    EditProyectoComponent,
    AddProyectoComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    ProgressBarAngularModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
