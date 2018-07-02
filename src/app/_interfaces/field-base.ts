export class FieldBase<T> {
    value: T;
    name: string;
    label: string;
    required: boolean;

    constructor(options: {
        value?: T,
        name?: string,
        label?: string,
        required?: boolean,
    } = {}) {
        this.value = options.value;
        this.name = options.name || '';
        this.label = options.label || '';
        this.required = !!options.required;
    }
}