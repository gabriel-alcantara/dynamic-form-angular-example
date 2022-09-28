import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/modules/dynamic-form/models/field-model';
import { QuestionBase } from 'src/app/modules/dynamic-form/models/question-base';
import { QuestionService } from 'src/app/modules/dynamic-form/services/question.service';
import DefaultInputs from './mockInputsResponse/default-inputs.json';

@Component({
  selector: 'app-random-test',
  templateUrl: './random-test.component.html',
  styleUrls: ['./random-test.component.scss'],
  providers: [QuestionService],
})
export class RandomTestComponent implements OnInit {
  public inputList: QuestionBase<any>[];
  public defaultInputs: Field[] = DefaultInputs;

  public showInputs: boolean;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getInputs();
  }

  public submit(value: any): void {
    console.log(value);
  }

  public getInputs(): void {
    const mockInputs = this.defaultInputs;

    this.generateFields(mockInputs);
  }

  public generateFields(fields: any): void {
    this.questionService.adaptToReturnFields(fields).subscribe((res: any) => {
      this.inputList = res;
      this.showInputs = true;
      console.log(this.inputList)
    });
  }
}
