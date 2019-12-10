import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-likedcourses',
  templateUrl: './likedcourses.component.html',
  styleUrls: ['./likedcourses.component.css']
})
export class LikedcoursesComponent implements OnInit {
  studentLikedCourses = [];
  totalCredits: number;

  constructor(private service: CourseService) { }

  ngOnInit() {
    this.studentLikedCourses = this.service.likedCourses;

  }

  getTotalCredits()
  {
    for (let courseNum = 0; courseNum < this.studentLikedCourses.length; courseNum++) {
      this.totalCredits += +this.studentLikedCourses[courseNum].credits;
    }
    console.log(this.totalCredits);
  }

}
