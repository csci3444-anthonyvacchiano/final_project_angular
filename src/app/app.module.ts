import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherListDataService } from './services/teacher-list-data.service';

const appRoutes:Routes = [
  {path:'', component: TeacherListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TeacherListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
