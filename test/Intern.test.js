const Engineer = require("../lib/Intern.js");
describe("Intern", () => {
    

      // 'set' School Name"
      it("Can find school name via constructor", () => {
        const testSchool = "schoolName";
        const int = new Intern("Joe", 1, "test@test.com", testSchool);
        // We expect 'result' to equal to test value' function is working correctly.
        expect(int.school).toBe(testSchool);
             
      });

    //   test title
    it("getRole function should return Intern", () =>{
        const testValue="Intern";
        const int= new Intern("Joe", 1, "test@test.com", testValue);
        expect(int.getRole()).toBe(testValue);
    });
    
    // test school function
    it("getSchool function shoult return  school name",()=>{
        const testSchoolName="UT Austin"
        const int=new Intern("Mike",2,"mike@test.com",testSchoolName);
        expect(int.getSchool()).toBe(testSchoolName);
    });


});
  
    