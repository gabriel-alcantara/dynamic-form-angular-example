import { QuestionBase } from '../models/question-base';

export class CheckBoxQuestion extends QuestionBase<string> {
  override controlType = 'checkbox';
}
