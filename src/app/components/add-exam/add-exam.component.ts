import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/models/exam.model';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css'],
})
export class AddExamComponent implements OnInit {
  exam: Exam = new Exam();
  submitted = false;

  constructor(private examService: ExamService) {}

  ngOnInit(): void {}

  saveExam(): void {
    this.examService.createExam(this.exam).then(() => {
      console.log('Exam created succesfully');
      this.submitted = true;
    });
  }

  newExam(): void {
    this.submitted = false;
    this.exam = new Exam();
  }
}
