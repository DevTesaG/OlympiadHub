import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Exam } from 'src/app/models/exam.model';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.css'],
})
export class ExamDetailsComponent implements OnInit {
  @Input() exam?: Exam;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  currentExam: Exam = {
    title: '',
    subject: '',
    description: '',
    url: '',
    date: undefined,
  };

  message = '';

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.message = '';
    this.currentExam = { ...this.exam };
  }

  ngOnChange(): void {
    this.message = '';
  }

  updateExam(): void {
    const data = {
      title: this.currentExam.title,
      subject: this.currentExam.subject,
      description: this.currentExam.description,
      url: this.currentExam.url,
      date: this.currentExam.date,
    };

    if (this.currentExam.id) {
      this.examService
        .updateExam(this.currentExam.id, data)
        .then(() => {
          this.message = 'this exam was updated succesfully!';
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  deleteExam(): void {
    if (this.currentExam.id) {
      this.examService
        .deleteExam(this.currentExam.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The exam was updated succesfully!';
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
