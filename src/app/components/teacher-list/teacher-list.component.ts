import { Component, OnInit } from '@angular/core';

import { TeacherListDataService } from '../../services/teacher-list-data.service';
import { TeacherList } from '../../services/teacher-list-data.service';


@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
})
export class TeacherListComponent implements OnInit {
  teacherlists: TeacherList
  name:string
  
  isToDisplayTeachers: boolean = false;
  constructor(private teacherListDataService:TeacherListDataService) { 
    console.log('TeacherListComponent constructor executed');
    this.name = 'ANTHONY VACCHIANO';

    this.teacherListDataService.getTeachers().subscribe( (teacherlists) => {
      console.log(teacherlists);
      this.teacherlists = teacherlists;
    });
  }
  ngOnInit() {
    console.log('teacherListComponent ngOnInit executed');
    this.name += '(added by ngOnInit)';
 }



  toggleToDisplayTeachers() {
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  }
    }
