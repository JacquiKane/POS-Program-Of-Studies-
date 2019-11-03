import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carmel High School Program Of Studies';

  constructor (private service: CourseService){
    service.objectify();
  }
}
