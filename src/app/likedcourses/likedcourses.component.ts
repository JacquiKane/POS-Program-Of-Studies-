import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-likedcourses',
  templateUrl: './likedcourses.component.html',
  styleUrls: ['./likedcourses.component.css']
})
export class LikedcoursesComponent implements OnInit {
  studentLikedCourses = [];
  constructor(private service: CourseService) { }

  ngOnInit() {
    this.studentLikedCourses = this.service.likedCourses;

  }

}
