import { ExperienciaPComponent } from './components/expProfesional/experiencia-p.component';
import { AddExperienciaPComponent } from './components/expProfesional/add-experiencia-p.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { AddCursosComponent } from './components/cursos/add-cursos.component';
import { EditResumeComponent } from './components/resume/edit-resume.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { AllcomponentsComponent } from './components/allcomponents/allcomponents.component';
import { LoginComponent } from './components/login/login.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EditCursoComponent } from './components/cursos/edit-curso.component';
import { AddEducacionComponent } from './components/educacion/add-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditExperienciaPComponent } from './components/expProfesional/edit-experiencia-p.component';
import { ProyectosComponent } from './components/portfolio/proyectos.component';
import { EditProyectoComponent } from './components/portfolio/edit-proyecto.component';
import { AddProyectoComponent } from './components/portfolio/add-proyecto.component';

const routes: Routes = [
  {path: '',component:AllcomponentsComponent},
  {path: 'login',component:LoginComponent},
  {path: 'editAbout/:id',component: EditAboutComponent},
  {path: 'editResume/:id',component: EditResumeComponent},
  {path: 'editCursos',component: CursosComponent},
  {path: 'addCurso',component: AddCursosComponent},
  {path: 'editCurso/:id',component: EditCursoComponent},
  {path: 'Educacion',component: EducacionComponent},
  {path: 'addEducacion',component: AddEducacionComponent},
  {path: 'editEducacion/:id',component: EditEducacionComponent},
  {path: 'Experiencia',component: ExperienciaPComponent},
  {path: 'addExperiencia',component: AddExperienciaPComponent},
  {path: 'editExperiencia/:id',component: EditExperienciaPComponent},
  {path: 'Proyectos',component: ProyectosComponent},
  {path: 'editProyecto/:id',component: EditProyectoComponent},
  {path: 'addProyecto',component: AddProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
