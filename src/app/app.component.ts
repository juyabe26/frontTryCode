import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from './core/elements/components';
import { FieldConfig } from './core/elements/field.interface';

@Component({
  selector: 'wkr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Walkers app';

}
