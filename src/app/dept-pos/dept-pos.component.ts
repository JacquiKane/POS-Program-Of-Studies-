import { Component, OnInit, Input } from '@angular/core';
import {RouterModule, ActivatedRoute} from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-dept-pos',
  templateUrl: './dept-pos.component.html',
  styleUrls: ['./dept-pos.component.css']
})
export class DeptPOSComponent implements OnInit {
  @Input() departmentid; 
  deptCourses: any;
  departmentname: any;
  departmentchair: any;
  deptCoursesAsObjs: any;

  constructor(private route: ActivatedRoute, private service: CourseService) { 

  }
 
  ngOnInit() {
    const theId: string = this.route.snapshot.paramMap.get('id');
    console.log("as a string " + theId);
    this.departmentid = +theId;
    this.departmentname = this.service.getDeptName(this.departmentid);
    //this.service.getDeptCourses(this.departmentid).subscribe((response)=>this.gotCourses(response));
    // Not an observable!!! 
    this.deptCourses = this.service.getDeptCoursesAsObjs(this.departmentid);
    console.log(this.deptCourses);
    this.departmentchair=this.service.getDeptChair(this.departmentid);
  }
 

}
