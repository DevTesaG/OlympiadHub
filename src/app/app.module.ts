import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AddExamComponent } from './components/add-exam/add-exam.component';
import { ExamDetailsComponent } from './components/exam-details/exam-details.component';
import { ExamsListComponent } from './components/exams-list/exams-list.component';
import { FormsModule } from '@angular/forms';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { FileDetailsComponent } from './components/file-details/file-details.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmailLoginComponent } from './components/email-login/email-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddExamComponent,
    ExamDetailsComponent,
    ExamsListComponent,
    UploadFileComponent,
    UploadListComponent,
    FileDetailsComponent,
    LoginComponent,
    SingUpComponent,
    DashboardComponent,
    EmailLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
