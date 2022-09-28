import { PhoneValidator } from './phone.validator';
import { UntypedFormControl } from '@angular/forms';

describe('PhoneValidator', () => {
  const control = new UntypedFormControl();

  it('should return error if placeholder chars are found', () => {
    control.setValue('53_________');
    expect(PhoneValidator(control)).toEqual({ phone: true });
  });

  it('should return error if number length is less than 11', () => {
    control.setValue('5398123456');
    expect(PhoneValidator(control)).toEqual({ phone: true });

    control.setValue('53981234567');
    expect(PhoneValidator(control)).toBeNull();
  });

  it('should only allow valid region number prefix', () => {
    control.setValue('53981234567');
    expect(PhoneValidator(control)).toBeNull();

    control.setValue('51981234567');
    expect(PhoneValidator(control)).toBeNull();

    control.setValue('11981234567');
    expect(PhoneValidator(control)).toBeNull();

    control.setValue('10981234567');
    expect(PhoneValidator(control)).toEqual({ phoneArea: true });
  });

  it('should return error if number is not prefixed by 9', () => {
    control.setValue('53882374637');
    expect(PhoneValidator(control)).toEqual({ phone: true });

    control.setValue('53982374637');
    expect(PhoneValidator(control)).toBeNull();
  });

  it('should return error if number has more than 6 equal numbers', () => {
    control.setValue('53999999999');
    expect(PhoneValidator(control)).toEqual({ phone: true });

    control.setValue('53999999988');
    expect(PhoneValidator(control)).toEqual({ phone: true });

    control.setValue('53999999788');
    expect(PhoneValidator(control)).toBeNull();
  });

});
