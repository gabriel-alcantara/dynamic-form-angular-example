import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionBase } from '../models/question-base';
import { QuestionControlService } from '../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {


  @Input() questions: QuestionBase<string>[] | null = [];
  @Input() loading: boolean;
  @Input() readOnly: boolean | false;


  @Output() payload = new EventEmitter<any>();

  form!: UntypedFormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private router: Router) {}

  public ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  public onSubmit(): void {
    this.payLoad = this.form.getRawValue();
    // this.payLoad = JSON.stringify(this.form.getRawValue());
    this.payload.emit(this.payLoad);
  }

  public resetForm(): void {
    this.form.reset();
  }
}
