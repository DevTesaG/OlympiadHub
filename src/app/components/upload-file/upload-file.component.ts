import { Component, OnInit } from '@angular/core';
import { Docfile } from 'src/app/models/docfile.model';
import { DocfileService } from 'src/app/services/docfile.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit {
  selectedFiles?: FileList;
  currentUpload?: Docfile;
  percentage = 0;

  constructor(private fileService: DocfileService) {}

  ngOnInit(): void {}

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentUpload = new Docfile(file);
        this.fileService.pushFileToStorage(this.currentUpload).subscribe(
          (percentage) => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }
}
