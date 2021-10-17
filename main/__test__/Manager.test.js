const Manager = require("../lib/Manager");

test("Can set office number via constructor", () => {
    const testValue = "office number";
    const e = new Manager("Sang woo", 1, "test@test.com", testValue);
    expect(e.office).toBe(testValue);
});

test("getRole() should return Manager", () => {
    const testValue = "Manager";
    const e = new Manager("Sang woo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via entry", () => {
    const testValue = "office number";
    const e = new Manager("Sang woo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});