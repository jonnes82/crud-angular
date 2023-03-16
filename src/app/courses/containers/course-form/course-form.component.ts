import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form = this.formBuilder.group({
    name:[''],
    category:['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location ){

  }
  onSubmit() {
    this.service.save(this.form.value)
    .subscribe({next:  (data) => this.onSuccess(),
               error: (e) => this.onError(),
               complete: () => console.log('complete')
    });
  }
  onCancel() {
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Curso Salvo com sucesso','',{duration : 1000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar curso','',{duration : 1000});
  }

}
