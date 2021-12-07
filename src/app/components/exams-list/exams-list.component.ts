import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/models/exam.model';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.css'],
})
export class ExamsListComponent implements OnInit {
  exams?: Exam[];
  currentExam?: Exam;
  currentIndex = -1;
  title = '';

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.retriveExams();
  }

  retriveExams(): void {
    this.examService.getAllExams().subscribe((data) => (this.exams = data));
  }

  refreshList(): void {
    this.currentExam = undefined;
    this.currentIndex = -1;
    this.retriveExams();
  }

  setActiveExam(exam: Exam, index: number): void {
    if (this.currentExam) {
      this.currentExam = undefined;
      this.currentIndex = -1;
    } else {
      this.currentExam = exam;
      this.currentIndex = index;
    }
  }
}
