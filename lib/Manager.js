const Employee=require("./Employee");
class Manager extends Employee{
    constructor(name, id, email, officeNumber, title){
        super(id, name, email);
        this.officeNumber=officeNumber;
        this.title=title;
    }

        getRole(){
            return "Manager";
        }
        getOfficeNumber(){
            return this.officeNumber;
        }
 }
module.exports=Manager;