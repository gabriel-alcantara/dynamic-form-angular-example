import { QuestionBase } from '../models/question-base';

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}
