import { QuestionBase } from '../models/question-base';

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}
