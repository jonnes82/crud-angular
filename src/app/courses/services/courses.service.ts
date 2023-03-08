import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  //Observable typeScript estudar
  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), //close connection after a connection was maked
      delay(2000),
      tap(courses => console.log(courses))
    );
  }
}
