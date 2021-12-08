import { Component, Input, OnInit } from '@angular/core';
import { Docfile } from 'src/app/models/docfile.model';
import { DocfileService } from 'src/app/services/docfile.service';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css'],
})
export class FileDetailsComponent implements OnInit {
  @Input() uploadedFile!: any;

  constructor(private fileService: DocfileService) {}

  ngOnInit(): void {}

  deleteFile(file: any): void {
    this.fileService.deleteFile(file);
  }
}
