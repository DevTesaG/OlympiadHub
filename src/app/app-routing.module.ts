import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExamComponent } from './components/add-exam/add-exam.component';
import { ExamsListComponent } from './components/exams-list/exams-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'exams', pathMatch: 'full' },
  { path: 'exams', component: ExamsListComponent },
  { path: 'add', component: AddExamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
