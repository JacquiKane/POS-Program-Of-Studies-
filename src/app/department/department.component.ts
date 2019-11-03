import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
 
  @Input() Department;
  showPortal: boolean;

  constructor(private _route: ActivatedRoute, private _router: Router) { 
    this.showPortal = true;
  }


  selectCourse() {
    console.log("Courses for dept:"+this.Department.id);
    this.showCoursesWindow();
  }
  showCoursesWindow()
  {

      console.log(this.Department.id + "showcourses");


      this._router.navigate(['/depposwin/', this.Department.id]);
      //window.open ("/depposwin","DeptPOSComponent","menubar=1,resizable=1,width=600,height=600");

    }

  ngOnInit() {
  }

}
