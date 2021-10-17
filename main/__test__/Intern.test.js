const Intern = require("../lib/Intern");

test("Can set school name via constructor", () => {
    const testValue = "school";
    const e = new Intern("Sang woo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern("Sang woo", 1, "test@test.com", "school");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school name via entry", () => {
    const testValue = "school";
    const e = new Intern("Sang woo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});