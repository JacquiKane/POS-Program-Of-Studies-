import { Component, OnInit, Inject, Input, ComponentFactoryResolver } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialoginnards',
  templateUrl: './dialoginnards.component.html',
  styleUrls: ['./dialoginnards.component.css']
})
export class DialoginnardsComponent implements OnInit {
  course: any;

  constructor(private dialogRef: MatDialogRef<DialoginnardsComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.course = data;
    console.log(data);
   }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
