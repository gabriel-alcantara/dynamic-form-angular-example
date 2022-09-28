import { AbstractControl } from '@angular/forms';

interface Error {
  phoneArea?: boolean;
  phone?: boolean;
}

const validStatePrefixes = [
// eslint-disable-next-line max-len
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24', '27', '28', '31', '32', '33', '34', '35', '37', '38', '41', '42', '43', '44', '45', '46', '47', '48', '49', '51', '53', '54', '55', '61', '62', '63', '64', '65', '66', '67', '68', '69', '71', '73', '74', '75', '77', '79', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92', '93', '94', '95', '96', '97', '98', '99',
];

export function PhoneValidator(control: AbstractControl): Error {
  if (control.value?.includes('_')) { return { phone: true }; }

  const value: string = control.value?.replace(/[|&;$%@"<>()+,\-_ ]/g, '');

  if (value && value.length > 0 &&  value.length < 11) {
    return { phone: true };
  }

  if (value && !validStatePrefixes.includes(value.substring(0, 2))) {
    return { phoneArea: true };
  }

  const firstNumberRegex = new RegExp(/(\d)\d{1}9\d{8}/g);

  if (value && !firstNumberRegex.test(value)) {
    return { phone: true };
  }

  const sameNumberRegex = new RegExp(/(\d)\1{6}/g);

  if (value && sameNumberRegex.test(value)) {
    return { phone: true };
  }

  return null as any;
}
