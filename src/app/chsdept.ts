import { CHSCourse } from './chscourse';

export class CHSDept {
    name: string;
    chair: string;
    numcourses: string; 
    id: string;
    allcourses: Array<CHSCourse>;

    constructor(dept) {
        this.name = dept.name;
        this.chair = dept.chair;
        this.numcourses = dept.courses;
        this.id = dept.id;
        this.allcourses = new Array<CHSCourse>();   
    }
}
