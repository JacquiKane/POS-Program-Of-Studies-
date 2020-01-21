import { Component, OnInit, Input } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogConfig,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialoginnardsComponent } from '../dialoginnards/dialoginnards.component';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-deptcourse',
  templateUrl: './deptcourse.component.html',
  styleUrls: ['./deptcourse.component.css']
})
export class DeptcourseComponent implements OnInit {
@Input() course;

  constructor(public dialog : MatDialog, private service: CourseService) { }

  ngOnInit() {
    console.log(this.course.name);
  }

  open()
  {
    console.log("opening modal");


      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        id: 1,
        title: 'Course Information'
    };
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height= '700px';
      dialogConfig.width='600px'; 
      dialogConfig.data = this.course;
      dialogConfig.panelClass = 'POC-mat-dialog-container';

      this.dialog.open(DialoginnardsComponent, dialogConfig);



   // dialogRef.afterClosed().subscribe(result=> { alert("DIALOGS");})
  }

like( course ) {
  course.isLiked = !(course.isLiked);
  if (course.isLiked) {
    this.service.addLikedCourse(course);
  }
  else {
    console.log("removing from liked list");
    this.service.removeLikedCourse(course);
  }
}

}
