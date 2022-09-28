export class QuestionBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  isMultiline: boolean;
  options: { key: string; value: string }[];
  size: string;
  mask: string;
  placeholder: string;
  tag: string;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      isMultiline?: boolean;
      options?: { key: string; value: string }[];
      size?: string;
      mask?: string;
      placeholder?: string;
      tag?: string;

    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.isMultiline = options.isMultiline ? true : false;
    this.options = options.options || [];
    this.size = options.size || '';
    this.mask = options.mask || '';
    this.placeholder = options.placeholder || '';
    this.tag = options.tag || '';
  }
}
