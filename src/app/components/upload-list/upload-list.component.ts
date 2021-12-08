import { Component, OnInit } from '@angular/core';
import { DocfileService } from 'src/app/services/docfile.service';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.css'],
})
export class UploadListComponent implements OnInit {
  uploadedFiles?: any[];

  constructor(private fileService: DocfileService) {}

  ngOnInit(): void {
    this.fileService
      .getFiles()
      .subscribe((files) => (this.uploadedFiles = files));
  }
}
