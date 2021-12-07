import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exam } from '../models/exam.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private dbPath = '/exams';
  examsRef: AngularFirestoreCollection<Exam>;

  constructor(private db: AngularFirestore) {
    this.examsRef = db.collection(this.dbPath);
  }

  //Alternativa getall ?
  // getAllExams(): Observable<Exam[]> {
  //   return this.examsRef.valueChanges({ id: 'id' }) as Observable<Exam[]>;
  // }

  getAllExams(): Observable<Exam[]> {
    return this.examsRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({
          id: c.payload.doc.id,
          ...c.payload.doc.data(),
        }))
      )
    );
  }

  createExam(exam: Exam): any {
    return this.examsRef.add({ ...exam });
  }

  updateExam(key: string, data: any): Promise<void> {
    return this.examsRef.doc(key).update(data);
  }

  deleteExam(key: string): Promise<void> {
    return this.examsRef.doc(key).delete();
  }
}
