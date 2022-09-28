import { NameValidator } from './name.validator';
import { UntypedFormControl } from '@angular/forms';

describe('NameValidator', () => {
  const control = new UntypedFormControl();

  it('should return error if string does not include spaces', () => {
    control.setValue('John');
    expect(NameValidator(control)).toEqual({ name: true });
  });

  it('should return error if string contains less than two words of at least 2 chars', () => {
    control.setValue('John ');
    expect(NameValidator(control)).toEqual({ name: true });

    control.setValue('John D');
    expect(NameValidator(control)).toEqual({ name: true });

    control.setValue('John Do');
    expect(NameValidator(control)).toBeNull();
  });

  it('should return error and not count excluded words', () => {
    control.setValue('John da');
    expect(NameValidator(control)).toEqual({ name: true });

    control.setValue('John de da');
    expect(NameValidator(control)).toEqual({ name: true });

    control.setValue('John delos');
    expect(NameValidator(control)).toEqual({ name: true });

    control.setValue('John de los Santos');
    expect(NameValidator(control)).toBeNull();
  });

});
