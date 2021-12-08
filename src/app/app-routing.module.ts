import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExamComponent } from './components/add-exam/add-exam.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExamsListComponent } from './components/exams-list/exams-list.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'email-login', component: SingUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exams', component: ExamsListComponent },
  { path: 'add', component: AddExamComponent },
  { path: 'uploadfile', component: UploadFileComponent },
  { path: 'files', component: UploadListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
