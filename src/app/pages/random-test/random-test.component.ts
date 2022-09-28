import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/app/modules/dynamic-form/models/question-base';
import { QuestionService } from 'src/app/modules/dynamic-form/services/question.service';

@Component({
  selector: 'app-random-test',
  templateUrl: './random-test.component.html',
  styleUrls: ['./random-test.component.scss'],
  providers: [QuestionService]

})
export class RandomTestComponent implements OnInit {

  inputList$: Observable<QuestionBase<any>[]>;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  public submit(value: any): void {
    console.log(value);
  }

}
