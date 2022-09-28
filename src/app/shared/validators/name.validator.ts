import { AbstractControl } from '@angular/forms';

interface Error {
  name?: boolean;
}

export function NameValidator(control: AbstractControl): Error {
  if (!control.value) { return null as any }
  const value: string = control.value.replace(/[\s]{1,}/g, ' ').trim();
  const exclude: string[] = [
    'de', 'da', 'do', 'dos', 'das',
    'e', 'las', 'del', 'los', 'y',
    'delas', 'delos'
  ];

  const acceptable: boolean = value.split(' ').map((i) => {
      return i.length >= 2 && !exclude.includes(i);
    }).filter((b) => Boolean(b)).length >= 2;

  if (value && !(acceptable) ) {
    return { name: true };
  }

  return null as any
}
