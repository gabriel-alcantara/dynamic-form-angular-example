import { AbstractControl } from '@angular/forms';
import CPF from 'cpf-check';

interface Error {
  cpf?: boolean;
  cpfequal?: boolean;
  cpfnotequal?: boolean;
}

export class CpfValidator {

  /**
   * Validate CPF number
   *
   * @param control [AbstractControl] - FormControl
   * @return [Error|null]
   */
  static number(control: AbstractControl): Error {
    if (!control.value) { return null as any; }
    const value = CPF.strip(control.value);
    return !CPF.validate(value) ? { cpf: true } : null as any;
  }

  /**
   * Validate CPF to not be equal to list of values.
   *
   * @param values [Array<string>] - Values for evaluation
   * @return [Error|null]
   */
  static notEqualTo(values: string[]): (control: AbstractControl) => Error {
    return (control: AbstractControl): Error => {
      if (!control.value) { return null as any; }
      const result = values.some(v => CPF.strip(v) === CPF.strip(control.value));
      return result ? { cpfequal: true } : null as any;
    };
  }

  /**
   * Validate CPF to be equal to given values.
   *
   * @param values [Array<string>] - Values for evaluation
   * @return [Error|null]
   */
  static equalTo(values: string[]): (control: AbstractControl) => Error {
    return (control: AbstractControl): Error => {
      if (!control.value) { return null as any; }
      const result = values.some(v => CPF.strip(v) === CPF.strip(control.value));
      return !result ? { cpfnotequal: true } : null as any;
    };
  }
}
