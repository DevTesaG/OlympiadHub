import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import {
  AngularFireStorage,
  AngularFireStorageReference,
} from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Docfile } from '../models/docfile.model';

@Injectable({
  providedIn: 'root',
})
export class DocfileService {
  private basePath = '/files';
  filesRef: AngularFirestoreCollection<any>;

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.filesRef = db.collection(this.basePath);
  }

  pushFileToStorage(file: Docfile): Observable<number | undefined> {
    const filePath = `${this.basePath}/${file.loadfile.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file.loadfile);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downLoadURL) => {
            file.url = downLoadURL;
            file.title = file.loadfile.name;
            this.saveFileData(file);
          });
        })
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }

  saveFileData(file: Docfile): any {
    const { loadfile, ...specialFile } = file;
    return this.filesRef.add({ ...specialFile });
  }

  getFiles(): Observable<any[]> {
    return this.filesRef.valueChanges({ id: 'id' }) as Observable<[]>;
    // return this.db.list(this.basePath, (ref) => ref.limitToLast(numberItems));
  }

  deleteFile(file: Docfile): void {
    this.deleteFileDB(file.id)
      .then(() => {
        this.deleteFileStorage(file.title);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }

  deleteFileDB(id: string): Promise<void> {
    return this.filesRef.doc(id).delete();
  }
}
