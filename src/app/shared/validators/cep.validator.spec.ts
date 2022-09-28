import { CEPValidator } from './cep.validator';
import { UntypedFormControl } from '@angular/forms';

describe('CEPValidator', () => {
  const control = new UntypedFormControl();

  it('should validate CEP number format', () => {
    control.setValue('12345678');
    expect(CEPValidator(control)).toBeNull();

    control.setValue('abcdefgh');
    expect(CEPValidator(control)).toEqual({ cep: true });

    control.setValue('1234567');
    expect(CEPValidator(control)).toEqual({ cep: true });

    control.setValue('123456789');
    expect(CEPValidator(control)).toEqual({ cep: true });

    control.setValue(null);
    expect(CEPValidator(control)).toBeNull();
  });
});
