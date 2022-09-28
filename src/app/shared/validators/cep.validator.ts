import { AbstractControl } from '@angular/forms';

interface Error {
  cep?: boolean;
}

export function CEPValidator(control: AbstractControl): Error {
  if (!control.value) {
    return null as any;
  }
  const value: string = control.value.replace(/[|&;$%@"<>()+,\-_ ]/g, '');
  return !/^\d{8}$/g.test(value) ? { cep: true } : null as any;
}
