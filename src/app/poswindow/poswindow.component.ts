import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
 
@Component({
  selector: 'app-poswindow',
  templateUrl: './poswindow.component.html',
  styleUrls: ['./poswindow.component.css']
})
export class POSWindowComponent implements OnInit {
  allDepts: any;
  allCourses: any;

  constructor(private service: CourseService) { 
    this.allDepts = service.getAllDeptsAsObjs();
    console.log(this.allDepts);
  }

  ngOnInit() {
    this.allDepts = [
                    {"name":"Art","chair":"staub", "courses":"24", "id": "0", 
                         "allcourses": [
                          {"name" : "ceramics", "semesters" : "1 semester class","credits": "2"},
                          {"name" : "arthistory", "semesters" : "2 semester class","credits": "4"},
                          {"name" : "watercolours", "semesters" : "1 semester class","credits": "2"}
                          ]
                    },
                    {"name":"Business","chair":"lesjak", "courses":"24", "id": "1", 
                          "allcourses": [
                            {"name" : "computer science intro", "semesters" : "1","credits": "2"},
                            {"name" : "ap computer science", "semesters" : "2","credits": "4"},
                            {"name" : "economics", "semesters" : "1","credits": "2"},
                            {"name" : "IB Business", "semesters" : "4","credits": "5"},
                            {"name" : "Tech Support", "semesters" : "1","credits": "2"},
                            {"name" : "Business Law", "semesters" : "2","credits": "3"},
                            {"name" : "Accounting-1", "semesters" : "1","credits": "2"},
                            {"name" : "Accounting-2", "semesters" : "1","credits": "2"},
                            {"name" : "Personal Finance", "semesters" : "1","credits": "2"}
                            ]},
                    {"name":"Engineering","chair":"coghlan", "courses":"34", "id": "2", "allcourses":""},
                    {"name":"Math","chair":"Sohalski", "courses":"34", "id": "3", "allcourses":""},
                    {"name":"English","chair":"Peters", "courses":"34", "id": "4", "allcourses":""},
                    {"name":"Drama","chair":"Summers", "courses":"34", "id": "5", "allcourses":""},
                    {"name":"Languages","chair":"O'Brien", "courses":"34", "id": "6", "allcourses":""},
                    {"name":"Science","chair":"rhodes", "courses":"34", "id": "7", "allcourses":""}
                     ];
          this.allDepts = this.service.getAllDeptsAsObjs();
    }                   
  }