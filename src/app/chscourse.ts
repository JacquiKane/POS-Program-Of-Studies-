export class CHSCourse {
    id: string;
    name: string;
    semesters: string;
    credits: string;
    description: string;
    isLiked: boolean;

    constructor(course) {
        this.id = course.id;
        this.name = course.name;
        this.semesters = course.semesters;
        this.credits = course.credits;
        this.description = course.description;
        this.isLiked = false;
    }


}
