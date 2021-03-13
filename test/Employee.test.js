const Employee = require("../lib/Employee");
describe("Employee", () => {
    
  it("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(typeof (emp)).toBe("object");
  });

  it("can set name through constructor", ()=>{
    const name ="Stacy";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);

  })
  it("Can get name via getName function", () => {
    const testValue = "Robert";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
  });
  
  it("Can get id through getId function", () => {
    const testValue = 100;
    const emp = new Employee("Mike", testValue);
    expect(emp.getId()).toBe(testValue);
  });

  it("Can get email through getEmail function", () => {
      const testValue = "test@test.com";
      const emp = new Employee("Mike", 1, testValue);
      expect(emp.getEmail()).toBe(testValue);
  });

  it("getRole() functionshould return Employee", () => {
      const testValue = "Employee";
      const emp = new Employee("Robert", 1, "test@test.com", "Employee");
      expect(emp.getRole()).toBe(testValue);
  });

  

});
  
    