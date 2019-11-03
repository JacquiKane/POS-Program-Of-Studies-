import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { POSWindowComponent } from './poswindow/poswindow.component';
import { DepartmentComponent } from './department/department.component';
import { DeptPOSComponent } from './dept-pos/dept-pos.component';
import { WindowComponent } from './window/window.component';
import { PortalModule } from '@angular/cdk/portal';
import { Routes, RouterModule } from '@angular/router';
import {Router, ActivatedRoute } from '@angular/router';
import { routing } from './app-routing.module';
import { DeptcourseComponent } from './deptcourse/deptcourse.component';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursedialogComponent } from './coursedialog/coursedialog.component';
import { DialoginnardsComponent } from './dialoginnards/dialoginnards.component';
import { MatIconModule } from '@angular/material/icon';
import { POSSearchComponent } from './possearch/possearch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import { LikedcoursesComponent } from './likedcourses/likedcourses.component';




@NgModule({
  declarations: [
    AppComponent,
    POSWindowComponent,
    DepartmentComponent,
    DeptPOSComponent,
    WindowComponent,
    DeptcourseComponent,
    CoursedialogComponent,
    DialoginnardsComponent,
    POSSearchComponent,
    LikedcoursesComponent
  ],
  entryComponents: [DialoginnardsComponent],
  imports: [ 
    BrowserModule,
    PortalModule,
    RouterModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [MatDialog, 
    { provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {  
}
