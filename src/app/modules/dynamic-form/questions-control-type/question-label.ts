import { QuestionBase } from '../models/question-base';

export class LabelQuestion extends QuestionBase<string> {
  override controlType = 'label';
}
