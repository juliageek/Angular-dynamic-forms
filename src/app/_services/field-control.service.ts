import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FieldBase } from '../_interfaces/field-base';

@Injectable()
export class FieldControlService {
    constructor() { }

    toFormGroup(fields: FieldBase<any>[] ) {
        const group: any = {};
        fields.forEach(field => {
            group[field.name] = new FormControl(field.value || '', Validators.required);
        });
        return new FormGroup(group);
    }
}
