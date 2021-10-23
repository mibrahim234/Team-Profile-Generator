const Engineer = require("../lib/Engineer");

test("Can set Github account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Sang woo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {    
    const testValue = "Engineer";
    const e = new Engineer("Sang woo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get github username via github", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Sang woo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});