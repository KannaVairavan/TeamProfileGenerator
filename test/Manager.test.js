const Manager = require("../lib/Manager");
descripe("Manager", () =>{
    // 'set' School Name"
    it("Can find office number via constructor", () => {
        const testNumber = "111-111-1111";
        const Mg = new manager("Joe", 1, "test@test.com", testNumber);
        // We expect 'result' to equal to test value' function is working correctly.
        expect(Mg.school).toBe(testNumber);
             
      });

    //   test title
    it("getRole function should return Manager", () =>{
        const testValue="Manager";
        const int= new Intern("Joe", 1, "test@test.com", testValue);
        expect(int.getRole()).toBe(testValue);
    });
    
    // test school function
    it("getSchool function should return  school name",()=>{
        const getOfficeNumber="111-111-1111"
        const int= new Intern("Mike",2,"mike@test.com",getOfficeNumber);
        expect(int.getSchool()).toBe(getOfficeNumber);
    });


});
  
})