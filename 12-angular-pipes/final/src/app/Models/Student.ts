export class Student{
    constructor(id: number, name: string, gender: string, dob: Date, course: string, marks: number, fee: number){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.course = course;
        this.marks = marks;
        this.fee = fee;
    }
    
    id: number;
    name: string;
    gender: string;
    dob: Date;
    course: string;
    marks: number;
    fee: number;
}