import { EmailValidator } from './email.validator';
import { UntypedFormControl } from '@angular/forms';

describe('EmailValidator', () => {
  const control = new UntypedFormControl();

  it('should validate email format', () => {
    control.setValue('dummy@email.com');
    expect(EmailValidator(control)).toBeNull();

    control.setValue('email@domain-one.com');
    expect(EmailValidator(control)).toBeNull();

    control.setValue('email@domain.name');
    expect(EmailValidator(control)).toBeNull();

    control.setValue('123412312');
    expect(EmailValidator(control)).toEqual({ email: true });

    control.setValue(null);
    expect(EmailValidator(control)).toBeNull();
  });
});
