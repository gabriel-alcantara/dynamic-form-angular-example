import { Injectable } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  CpfValidator,
  EmailValidator,
  NameValidator,
  PhoneValidator,
} from 'src/app/shared/validators';
import { QuestionBase } from '../models/question-base';

@Injectable()
export class QuestionControlService {
  constructor() {}

  public toFormGroup(questions: QuestionBase<string>[]): any {
    const group: any = {};

    questions.forEach((question) => {
      // group[question.key] = question.required
      //     ? new FormControl(question.value || '', [Validators.required])
      //     : new FormControl(question.value || '');
      group[question.key] = new UntypedFormControl(
        question.value || '',
        this.verifyValidations(question)
      );
    });
    return new UntypedFormGroup(group);
  }

  public verifyValidations(question: QuestionBase<string>): ValidatorFn[] {
    const tmpValidators: ValidatorFn[] = [];
    if (question.required) {
      tmpValidators.push(Validators.required);
    }

    if (question.mask === 'cpf') {
      tmpValidators.push(CpfValidator.number);
    }

    if (question.mask === 'email') {
      tmpValidators.push(EmailValidator);
    }

    if (question.mask === 'phone') {
      tmpValidators.push(PhoneValidator);
    }

    if (question.mask === 'name') {
      tmpValidators.push(NameValidator);
    }
    return tmpValidators;
  }
}
