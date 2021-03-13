const Manager = require("../lib/Manager");
describe("Manager", () => {
    // set office number"
    it("Can find office number via constructor", () => {
        const testNumber = "111-111-1111";
        const Mg = new Manager("Joe", 1, "test@test.com", testNumber);
        // We expect 'result' to equal to test value' function is working correctly.
        expect(Mg.officeNumber).toBe(testNumber);
             
      });

    //   test title
    it("getRole function should return Manager", () =>{
        const testValue="Manager";
        const Mg= new Manager("Joe", 1, "test@test.com", testValue);
        expect(Mg.getRole()).toBe(testValue);
    });
    
    // test Office number function
    it("getOfficeNumber function should return office phone number",()=>{
        const testOfficeNumber="111-111-1111"
        const Mg= new Manager("Mike",2,"mike@test.com",testOfficeNumber);
        expect(Mg.getOfficeNumber()).toBe(testOfficeNumber);
    });


});
  
