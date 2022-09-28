import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { QuestionBase } from '../models/question-base';
import { QuestionControlService } from '../services/question-control.service';
import { TEXT_MASKS } from './../../../shared/utils/text-masks.config';

@Component({
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss'],
  providers: [QuestionControlService],
})
export class DynamicFormBuilderComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: UntypedFormGroup;
  @Input() readOnly: boolean | false;

  public phoneMask = TEXT_MASKS.PHONE;
  public cpfMask = TEXT_MASKS.CPF;
  public cnpjMask = TEXT_MASKS.CNPJ;
  public cepMask = TEXT_MASKS.CEP;
  public chassiMask = TEXT_MASKS.CHASSI;
  public plateMask = TEXT_MASKS.CAR_PLATE;
  public yearMask = TEXT_MASKS.YEAR;

  get isValid(): boolean {
    return this.form.controls[this.question?.key].valid;
  }

  public getMask(maskType: string): any {
    switch (maskType) {
      case '':
        return { mask: false };
      case 'cpf':
        return { mask: this.cpfMask };
      case 'cnpj':
        return { mask: this.cnpjMask };
      case 'phone':
        return { mask: this.phoneMask };
      case 'cep':
        return { mask: this.cepMask };
      default:
        return { mask: false };
    }
  }
}
