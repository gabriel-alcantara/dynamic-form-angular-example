import { QuestionBase } from '../models/question-base';

export class FileQuestion extends QuestionBase<string> {
  override controlType = 'file';
}
