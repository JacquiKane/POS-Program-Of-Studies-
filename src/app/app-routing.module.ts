import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptPOSComponent } from './dept-pos/dept-pos.component'; 
import { POSWindowComponent } from './poswindow/poswindow.component';
import { POSSearchComponent } from './possearch/possearch.component';
import { LikedcoursesComponent } from './likedcourses/likedcourses.component';


const routes: Routes = [
 { path: 'depposwin/:id', component: DeptPOSComponent },
 { path: 'alldepwin', component : POSWindowComponent},
 { path: 'posSearch', component: POSSearchComponent },
 { path: 'alllikedcourses', component: LikedcoursesComponent},
 { path:'', pathMatch:'full', redirectTo:'all'}]; 

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
