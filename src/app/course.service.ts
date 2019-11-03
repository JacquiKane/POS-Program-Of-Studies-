import { Injectable } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { not } from '@angular/compiler/src/output/output_ast';
import { CHSDept } from './chsdept';
import { CHSCourse } from './chscourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  
  CHSAllDepts = []
  likedCourses = [];

  allCourses = [];
  allDepts = [
    {
      "name": "Art", "chair": "staub", "courses": "24", "id": "0",
      "allcourses": [
        { "id": "111", "name": "ceramics", "semesters": "1 semester class", "credits": "2" },
        { "id": "112", "name": "arthistory", "semesters": "2 semester class", "credits": "4" },
        { "id": "113", "name": "arthistory", "semesters": "2 semester class", "credits": "4" },
        { "id": "114", "name": "watercolours", "semesters": "1 semester class", "credits": "2" }
      ]
    },
    {
      "name": "Business", "chair": "lesjak", "courses": "24", "id": "1",
      "allcourses": [
        {
          "id": "4524", "name": "Accounting", "semesters": "2", "credits": "2",
          "description": "Accounting introduces the language of business using Generally Accepted Accounting Principles (GAAP) and procedures for proprietorships and partnerships using double-entry accounting. Emphasis is placed on accounting principles as they relate to both manual and automated financial systems. This course involves understanding, analyzing, and recording business transactions and preparing, analyzing, and interpreting financial reports as a basis for decision-making. Accounting 1 begins with bookkeeping concepts and then bridges those skills into concepts and principles of accounting. Students are exposed to the accounting cycle and banking practices for a service oriented business. In Accounting 1-2, students will study accounting and payroll systems and subsystems utilizing journals, ledgers, and financial statements for a merchandising business. This class is year-long. "
        },
        {
          "id": "4522", "name": "Advanced Accounting", "semesters": "2", "credits": "3",
          "description": "Advanced Accounting expands on the Generally Accepted Accounting Principles (GAAP) and procedures for proprietorships and partnerships using double-entry accounting covered in Introduction to Accounting. Emphasis is placed on accounting principles as they relate to both manual and automated financial systems. This course involves understanding, analyzing, and recording business transactions and preparing, analyzing, and interpreting financial reports as a basis for decision-making. Approximate student fee:  $9.68 "
        },
        {
          "id": "4560", "name": "Business Law and Ethics", "semesters": "2", "credits": "3",
          "description": "It is recommended (but not required) that students take AP Computer Science Principles.  Computer Science A assumes that the student has had prior programming experience.   Students solve programming problems by planning, entering, and debugging solutions using the Java language. Topics covered include: syntax, loops, methods, control structures, repetition tools, and simple data structures including arrays. The course follows the syllabus of the Advanced PlacementThis course follows the College Board AP Computer Science curriculum " +
            "*Students will have the opportunity to earn dual credit through Ivy Tech Community College as long as they meet the Ivy Tech requirements.Business Law and Ethics provides an overview of the legal system in the business setting. Topics covered include: basics of the judicial system, contract, personal, employment and property law. Application of legal principles and ethical decision-making techniques are presented through problem-solving methods and situation analyses. Students incorporate law-related current events and pertinent legal cases in their work. Real-world applications of the law are also emphasized.Three (3) Ivy Tech State College dual credits are available to qualified students. This class is recommended as a year-long class "
        },
        { "id": "4570", "name": "AP Computer Science", "semesters": "2", "credits": "4", "description": "It is recommended (but not required) that students take AP Computer Science Principles.  Computer Science A assumes that the student has had prior programming experience.   Students solve programming problems by planning, entering, and debugging solutions using the Java language. Topics covered include: syntax, loops, methods, control structures, repetition tools, and simple data structures including arrays. The course follows the syllabus of the Advanced Placement (AP) Computer Science, a curriculum as prescribed by the College Board guidelines.  Students may elect to take the AP Computer Science A Exam administered in May at their own expense. " },
        {
          "id": "4580", "name": "Business Management, Higher level, IB", "semesters": "4", "credits": "5", "description": "This course follows the College Board AP Computer Science curriculum " +
            "The emphasis is on problem solving and algorithmic development witht Java. "
        },
        {
          "id": "4582", "name": "Business Management, Standard level, IB", "semesters": "4", "credits": "5", "description": "This course follows the College Board AP Computer Science curriculum " +
            "The emphasis is on problem solving and algorithmic development witht Java. "
        },
        {
          "id": "5230", "name": "Tech Support 1,2", "semesters": "2", "credits": "4", "description": "This course follows the College Board AP Computer Science curriculum " +
            "The emphasis is on problem solving and algorithmic development witht Java. "
        },
        {
          "id": "4560", "name": "Business Law & Ethics 1,2", "semesters": "2", "credits": "3", "description": "This course follows the College Board AP Computer Science curriculum " +
            "The emphasis is on problem solving and algorithmic development witht Java. "
        },
        {
          "id": "4524", "name": "Accounting-1 1 & 2", "semesters": "2", "credits": "4", "description": "This course follows the College Board AP Computer Science curriculum " +
            "The emphasis is on problem solving and algorithmic development witht Java. "
        },
        {
          "id": "4522", "name": "Accounting-2 1 & 2", "semesters": "2", "credits": "4", "description": "This course follows the College Board AP Computer Science curriculum " +
            "The emphasis is on problem solving and algorithmic development witht Java. "
        },
        {
          "id": "4540", "name": "Personal Finance", "semesters": "1", "credits": "2", "description": "This course follows the College Board AP Computer Science curriculum " +
            "The emphasis is on problem solving and algorithmic development witht Java. "
        },
        {
          "id": "113", "name": "AP Comp Sci Principles", "semesters": "2", "credits": "3", "description": "This course follows the College Board AP Computer Science curriculum " +
            "The emphasis is on problem solving and algorithmic development witht Java. "
        },
        {
          "id": "5236", "name": "Games/Simulation", "semesters": "1", "credits": "2", "description": "This course follows the College Board AP Computer Science curriculum " +
            "The emphasis is on problem solving and algorithmic development witht Java. "
        }

      ]
    },
    { "name": "Engineering", "chair": "coghlan", "courses": "34", "id": "2", "allcourses": [] },
    {"name":"Math","chair":"Sohalski", "courses":"34", "id": "3", "allcourses":""},
    {"name":"English","chair":"Peters", "courses":"34", "id": "4", "allcourses":""},
    {"name":"Drama","chair":"Summers", "courses":"34", "id": "5", "allcourses":""},
    {"name":"Languages","chair":"O'Brien", "courses":"34", "id": "6", "allcourses":""},
    {"name":"Science","chair":"rhodes", "courses":"34", "id": "7", "allcourses":""}
     ];

  allDeptsAsObjs = [];
  allCoursesAsObjs = [];
  
  constructor() { 
  }


 objectify()
 {

   for (let index = 0; index < this.allDepts.length;  index++) {
     var dept = new CHSDept(this.allDepts[index]);
     for (let courseIndex = 0; courseIndex < this.allDepts[index].allcourses.length; courseIndex++) {
      var deptCourse = new CHSCourse(this.allDepts[index].allcourses[courseIndex]);
       dept.allcourses.push(deptCourse);
       }
     this.allDeptsAsObjs = this.allDeptsAsObjs.concat(dept);
    }
    console.log("Open service:");
    console.log(this.allDeptsAsObjs);
   }

 getAllDeptsAsObjs(){
   return this.allDeptsAsObjs;
 }


  getAllDepartments() {
    return this.allDepts;
  }

  getDeptCourses(id) {
    // Convert id to a number
    console.log("The dept id is : " + id);
    return this.allDepts[id].allcourses;
  }

  getDeptCoursesAsObjs(id) {
    // Convert id to a number
    console.log("The dept id is : " + id);
    return this.allDeptsAsObjs[id].allcourses;
  }

  getDeptName(id) {
    return this.allDepts[+id].name;
  }

  getDeptChair(id) {
    return this.allDepts[+id].chair;
  }

  getAllCourses() {
    this.allCourses = [];
    for (let index = 0; index < this.allDepts.length; index++) // foreach  
    {
      this.allCourses = this.allCourses.concat(this.allDepts[index].allcourses);
      //console.log("JSON OBJ : " + this.allDepts[index].allcourses);
      //console.log("Concatenated array:");
      //console.log(this.allCourses);
    }
    return this.allCourses;
  }
  getAllCoursesAsObjs() {
    this.allCoursesAsObjs = [];
    for (let index = 0; index < this.allDeptsAsObjs.length; index++) // foreach  
    {
      this.allCourses = this.allCourses.concat(this.allDeptsAsObjs[index].allcourses);
      //console.log("JSON OBJ : " + this.allDepts[index].allcourses);
      //console.log("Concatenated array:");
      //console.log(this.allCourses);
    }
    return this.allCourses;
  }
  getCoursesBasedOnCriteria(credits, weighted) {
    var coursesToFilter = this.getAllCourses();
    var filtered;
    filtered = coursesToFilter.filter(u =>
      u.credits == credits);
    return filtered;
  }
  getCoursesAsObjsBasedOnCriteria(credits, weighted) {
    var coursesToFilter = this.getAllCoursesAsObjs();
    var filtered;
    filtered = coursesToFilter.filter(u =>
      u.credits == credits);
    return filtered;
  }
  isLikedCourseDuplicate(course) {
    //for (let likedCourse of this.likedCourses) {
      for (let index = 0; index < this.likedCourses.length; index++) // foreach  
      {
      console.log("courses: " + course.id + " " + this.likedCourses[index].id);
      if (course.id === this.likedCourses[index].id) {
        return true;
      }
    }
    console.log("No duplicate");
    return false;
  }
 
  addLikedCourse(course) {
    let isDuplicate: boolean =  this.isLikedCourseDuplicate(course);
    console.log("isDuplicate:"+isDuplicate);
    if (isDuplicate) {
    console.log("DUPLICATE"+this.likedCourses);
    }
    else {
      this.likedCourses = this.likedCourses.concat(course);
      console.log(course);
    }
  }


  removeLikedCourse(course) {
    this.likedCourses = this.likedCourses.filter(obj => obj.id !== course.id);
    console.log(this.likedCourses);
  }
  
}
