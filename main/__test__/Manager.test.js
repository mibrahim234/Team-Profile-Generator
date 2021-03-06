const Manager = require("../lib/Manager");

test("Can set office number via constructor", () => {
    const testValue = "100";
    const e = new Manager("Sang woo", 1, "test@test.com", testValue);
    expect(e.office).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => { 
    const testValue = "Manager";
    const e = new Manager("Sang woo", 1, "test@test.com", "100");
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via office", () => {
    const testValue = 100;
    const e = new Manager("Sang woo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});