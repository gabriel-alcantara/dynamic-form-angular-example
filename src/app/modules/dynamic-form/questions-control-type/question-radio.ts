import { QuestionBase } from '../models/question-base';

export class RadioQuestion extends QuestionBase<string> {
  override controlType = 'radio';
}
