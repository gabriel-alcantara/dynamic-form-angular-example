export const PHONE_MASK = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

export const PHONE2_MASK = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

export const CEP_MASK = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
export const LICENSE_PLATE_MASK = [
  /[a-zA-Z]/,
  /[a-zA-Z]/,
  /[a-zA-Z]/,
  /[a-zA-Z0-9]/,
  /[a-zA-Z0-9]/,
  /[a-zA-Z0-9]/,
  /[a-zA-Z0-9]/,
];

export const CPF_MASK = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, ];
export const HEIGHT_MASK = [/\d/, '.', /\d/, /\d/];
export const WEIGHT_MASK = [/\d/, /\d/, /\d/];
export const CNPJ_MASK = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, ];
export const CARD_MASK = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
export const EXPIRATION_DATE_MASK = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ ];
export const NFE_MASK = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

export const DATE_MASK = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

export const CHASSI_MASK = [/[1-9]/, /\w/, /\w/, ' ', /\w/, /\w/, /\w/, /\w/, /\w/, /\w/, ' ', /\w/, /\w/, ' ', /\w/, /\w/, /\d/, /\d/, /\d/, /\d/];

export const YEAR_MASK = [/\d/, /\d/, /\d/, 'kg',];

export const TEXT_MASKS = {
  PHONE: PHONE_MASK,
  PHONE2: PHONE2_MASK,
  CEP: CEP_MASK,
  CPF: CPF_MASK,
  CNPJ: CNPJ_MASK,
  HEIGHT: HEIGHT_MASK,
  WEIGHT: WEIGHT_MASK,
  CAR_PLATE: LICENSE_PLATE_MASK,
  CC_NUMBER: CARD_MASK,
  CC_EXPIRE_DATE: EXPIRATION_DATE_MASK,
  DATE: DATE_MASK,
  NFE: NFE_MASK,
  CHASSI: CHASSI_MASK,
  YEAR: YEAR_MASK
};
