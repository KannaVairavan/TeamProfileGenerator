const Employee=require("./Employee");
class Intern extends Employee{
    constructor(name, id, email, school, title){
        super(id, name, email);
        this.school=school;
        this.title=this.title
    }

    getSchool(){
        return this.school;
    }
    getRole(){
        return this.title;
    }
}

module.exports=Intern;