import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from '../../_interfaces/field-base';
import { FieldControlService } from '../../_services/field-control.service';
import { SharedService } from '../../_services/shared.service';

@Component({
    selector: 'app-dynamic-user-form',
    templateUrl: './dynamic-user-form.component.html',
    styleUrls: ['./dynamic-user-form.component.scss']
})
export class DynamicUserFormComponent implements OnInit {
    @Input() fields: FieldBase<any>[];
    private form: FormGroup;
    private payLoad: string;

    constructor(private fcs: FieldControlService, private sharedService: SharedService) { }

    ngOnInit() {
        this.form = this.fcs.toFormGroup(this.fields);
    }

    onSubmit(form) {
        this.sharedService.emitChange(form.value);
    }


}
