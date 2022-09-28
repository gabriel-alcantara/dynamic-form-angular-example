import { CpfValidator } from './cpf.validator';
import { UntypedFormControl } from '@angular/forms';

describe('CpfValidator', () => {
  const control = new UntypedFormControl();

  it('should validate CPF number format', () => {
    control.setValue('014.600.600-32');
    expect(CpfValidator.number(control)).toBeNull();

    control.setValue('128.998.750-51');
    expect(CpfValidator.number(control)).toBeNull();

    control.setValue('184.337.350-55');
    expect(CpfValidator.number(control)).toBeNull();

    control.setValue('111.111.111-1');
    expect(CpfValidator.number(control)).toEqual({ cpf: true });

    control.setValue(null);
    expect(CpfValidator.number(control)).toBeNull();
  });

  it('should match numbers', () => {
    control.setValue('014.600.600-32');
    expect(CpfValidator.equalTo(['014.600.600-32'])(control)).toBeNull();

    control.setValue('014.600.600-32');
    expect(CpfValidator.equalTo(['128.998.750-51'])(control)).toEqual({ cpfnotequal: true });

    control.setValue(null);
    expect(CpfValidator.equalTo(['128.998.750-51'])(control)).toBeNull();
  });

  it('should not match numbers', () => {
    control.setValue('014.600.600-32');
    expect(CpfValidator.notEqualTo(['014.600.600-32'])(control)).toEqual({ cpfequal: true });

    control.setValue('014.600.600-32');
    expect(CpfValidator.notEqualTo(['128.998.750-51'])(control)).toBeNull();

    control.setValue(null);
    expect(CpfValidator.notEqualTo(['128.998.750-51'])(control)).toBeNull();
  });
});
