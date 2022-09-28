import { AbstractControl } from '@angular/forms';

interface Error {
  email?: boolean;
}

export function EmailValidator(control: AbstractControl): Error {
  const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

  if (control.value && !regex.test(control.value)) {
    return { email: true };
  }

  return null as any;
}
