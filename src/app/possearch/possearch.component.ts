import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-possearch',
  templateUrl: './possearch.component.html',
  styleUrls: ['./possearch.component.css']
})
export class POSSearchComponent implements OnInit {
  form: FormGroup;
  coursecredits = ['1', '2', '3', '4', '5'];
  weighted: boolean = true;
  weights = ['Regular', 'Partial', 'Full'];
  values = '';
  allSelectedCourses: any;
  isWeighted: any;
  mustHaveCredits: any;
  filteredcourses: any;

  onKey(value: string) {
    this.values += value + ' | ';
  }
  constructor(private formBuilder: FormBuilder, private service: CourseService) { 
    this.form = this.formBuilder.group({});
  }


onSubmit(formData) {
  console.log("IsWeighted :"+ this.isWeighted);
  console.log("musthavecredits:" + this.mustHaveCredits);
  this.filteredcourses = this.service.getAllCoursesAsObjs();
  this.filteredcourses = 
     this.service.getCoursesAsObjsBasedOnCriteria(this.mustHaveCredits, this.isWeighted);
  console.log("COURSES:");
  console.log(this.filteredcourses);
  }

  ngOnInit() {
  }

}
