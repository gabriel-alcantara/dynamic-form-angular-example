import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { QuestionBase } from '../models/question-base';
import { CheckBoxQuestion } from '../questions-control-type/question-checkbox';
import { DropdownQuestion } from '../questions-control-type/question-dropdown';
import { RadioQuestion } from '../questions-control-type/question-radio';
import { TextboxQuestion } from '../questions-control-type/question-textbox';
import { FileQuestion } from '../questions-control-type/question-file';
import { LabelQuestion } from '../questions-control-type/question-label';
import { Field } from '../models/field-model';

@Injectable()
export class QuestionService {
  // TODO: this is a mocked example about how to build dynamic fields
  public getQuestions(): any {
    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'cpfTest',
        label: 'Test input cpf',
        type: 'cpf',
        mask: 'cpf',
        value: '',
        required: true,
      }),

      new TextboxQuestion({
        key: 'emailTest',
        label: 'Test input email',
        type: 'email',
        mask: 'email',
        value: '',
      }),

      new TextboxQuestion({
        key: 'phoneTest',
        label: 'Test input phone',
        type: 'phone',
        mask: 'phone',
        value: '',
      }),

      new TextboxQuestion({
        key: 'nameTest',
        label: 'Test input name',
        type: 'name',
        mask: 'name',
        value: '',
      }),

      new TextboxQuestion({
        key: 'placaVeiculoTest',
        label: 'Test input placaVeiculo',
        type: 'placaVeiculo',
        mask: 'placaVeiculo',
        value: '',
      }),

      new TextboxQuestion({
        key: 'chassiTest',
        label: 'Test input chassi',
        type: 'chassi',
        mask: 'chassi',
        value: '',
      }),

      new TextboxQuestion({
        key: 'yearTest',
        label: 'Test input year',
        type: 'year',
        mask: 'year',
        value: '',
      }),

      // new RadioQuestion({
      //   key: 'radio',
      //   label: 'Test radio input',
      //   options: [
      //     { key: 'solid', value: 'Solid' },
      //     { key: 'great', value: 'Great' },
      //     { key: 'good', value: 'Good' },
      //     { key: 'unproven', value: 'Unproven' },
      //   ],
      //   order: 4,
      // }),

      // new CheckBoxQuestion({
      //   key: 'checkbox',
      //   label: 'Test radio input',
      //   options: [
      //     { key: 'solid', value: 'Solid' },
      //     { key: 'great', value: 'Great' },
      //     { key: 'good', value: 'Good' },
      //     { key: 'unproven', value: 'Unproven' },
      //   ],
      //   order: 5,
      // }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

  public adaptToReturnFields(campos: Field[]): any {
    if (campos) {
      const questions: QuestionBase<string>[] = [];
      campos.forEach((element) => {
        if (element.tag === 'label') {
          const tmpQuestion = new LabelQuestion({
            key: element.name,
            tag: element.tag,
            label: element.label,
            value: element.value,
            required: element.required,
            order: element.order,
            size: element.size,
            mask: element.mask,
            type: 'label',
          });
          questions.push(tmpQuestion);
        }

        if (element.enabled) {
          switch (element.type) {
            case 'text': {
              const tmpQuestion = new TextboxQuestion({
                key: element.name,
                tag: element.tag,
                placeholder: element.placeholder,
                label: element.label,
                value: element.value,
                required: element.required,
                order: element.order,
                size: element.size,
                mask: element.mask,
                type: 'text',
              });
              questions.push(tmpQuestion);
              break;
            }
            case 'number': {
              const tmpQuestion = new TextboxQuestion({
                key: element.name,
                tag: element.tag,
                placeholder: element.placeholder,
                label: element.label,
                value: element.value,
                required: element.required,
                order: element.order,
                size: element.size,
                mask: element.mask,
                type: 'number',
              });
              questions.push(tmpQuestion);
              break;
            }
            case 'dropdown': {
              const tmpQuestion = new DropdownQuestion({
                key: element.name,
                tag: element.tag,
                placeholder: element.placeholder,
                label: element.label,
                required: element.required,
                value: element.value,
                order: element.order,
                size: element.size,
                mask: element.mask,
              });
              questions.push(tmpQuestion);
              break;
            }
            case 'radio': {
              const tmpQuestion = new RadioQuestion({
                key: element.name,
                tag: element.tag,
                label: element.label,
                required: element.required,
                options: this.transformInOptions(element.options),
                order: element.order,
                size: element.size,
                value: element.value,
              });
              questions.push(tmpQuestion);
              break;
            }
            case 'checkbox': {
              const tmpQuestion = new CheckBoxQuestion({
                key: element.name,
                tag: element.tag,
                placeholder: element.placeholder,
                label: element.label,
                required: element.required,
                // options: this.transformInOptions(element.camposOpcao),
                order: element.order,
                size: element.size,
                mask: element.mask,
              });
              questions.push(tmpQuestion);
              break;
            }
            case 'file': {
              const tmpQuestion = new FileQuestion({
                key: element.name,
                tag: element.tag,
                placeholder: element.placeholder,
                label: element.label,
                required: element.required,
                // options: this.transformInOptions(element.camposOpcao),
                order: element.order,
                size: element.size,
                mask: element.mask,
                type: 'file',
              });
              questions.push(tmpQuestion);
              break;
            }
          }
        }
      });
      return of(questions.sort((a, b) => a.order - b.order));
    }
    return null;
  }

  public transformInOptions(items: any): any {
    const options: any = [];
    items.forEach((element: any) => {
      options.push({ key: element, value: element });
    });
    return options;
  }
}
