import { AbstractControl } from '@angular/forms';
import { cnpj, cpf } from 'cpf-cnpj-validator';

interface Error {
    cpfCnpj?: boolean;
}

export class CpfCnpjValidator {
    /**
     * Validate CPF/CNPJ number
     *
     * @param control [AbstractControl] - FormControl
     * @return [Error|null]
     */
    static number(control: AbstractControl): Error {
        if (!control.value) {
            return null;
        }
        return cnpj.isValid(control.value) || cpf.isValid(control.value)
            ? null
            : { cpfCnpj: true };
    }

}
