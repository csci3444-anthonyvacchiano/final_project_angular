import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherListDataService {

  constructor(public http:Http) { 
    console.log("TeacherListDataService constructor executing");
  }

  getTeachers() {
    // NOTE ilker below returns an "observable" from rxjs (react JS extension)
    return this.http.get('http://localhost:9016/api/v1/teachers')
      .map( response => response.json()); 
  }
}
export interface TeacherList {
  teacherid: string;
  name:string;
  lastname:string;
  title: string;
  age: number;
  isFullTime: boolean;
}
