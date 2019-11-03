import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-coursedialog',
  templateUrl: './coursedialog.component.html',
  styleUrls: ['./coursedialog.component.css']
})
export class CoursedialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
