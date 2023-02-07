const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should set the school of the intern", () => {
    let testSchool = "UCLA";
    let testIntern = new Intern("Mike", 1, "random@email", testSchool);
    expect(testIntern.school).toBe(testSchool);
  });

  it("should get the school of the intern", () => {
    let testSchool = "UCLA";
    let testIntern = new Intern("Mike", 1, "random@email", testSchool);
    expect(testIntern.getSchool()).toBe(testSchool);
  });

  it("should get the role of the intern", () => {
    let testIntern = new Intern("Mike", 1, "random@email", "UCLA");
    expect(testIntern.getRole()).toBe("Intern");
  });
});