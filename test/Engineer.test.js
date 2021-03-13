const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
    

      // 'set' GitHub account"
      it("Can set GitHUb account via constructor", () => {
        const gitTestValue = "GitHubUser";
        const eng = new Engineer("Joe", 1, "test@test.com", gitTestValue);
        // We expect 'result' to equal to test value' function is working correctly.
        expect(eng.github).toBe(gitTestValue);
             
      });

    //   test title
    it("getRole function should return Engineer", () =>{
        const testValue="Engineer";
        const eng= new Engineer("Joe", 1, "test@test.com", testValue);
        expect(eng.getRole()).toBe(testValue);
    });
    
    // test github function
    it("getgithub function shoult return GitHub user name",()=>{
        const testGitHubUser="UserName"
        const eng=new Engineer("Mike",2,"mike@test.com",testGitHubUser);
        expect(eng.getgithub()).toBe(testGitHubUser);
    });
    
    


});
  
    