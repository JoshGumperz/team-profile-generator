const Employee = require("../utils/Employee")
const Intern = require("../utils/Intern")


describe("Intern", () => {
    it("Intern class should be an instance of Employee class", () => {
        const newEmployee = new Intern();
        expect(newEmployee).toBeInstanceOf(Employee)
      })
    it("should create Intern object", () => {
        const newEmployee = new Intern()
        expect(typeof newEmployee).toEqual("object")
    })
    it("should create Intern class with name", () => {
        const newEmployee = new Intern("Josh");
        expect(newEmployee.name).toEqual("Josh")
    })
    it("should create Intern class with id", () => {
        const newEmployee = new Intern("Josh", 1);
        expect(newEmployee.id).toEqual(1)
    })
    it("should create Intern class with email", () => {
        const newEmployee = new Intern("Josh", 1, "name@example.com");
        expect(newEmployee.email).toEqual("name@example.com")
    })
    it("should create Intern class with school", () => {
        const newEmployee = new Intern("Josh", 1, "name@example.com", "hogwarts");
        expect(newEmployee.school).toEqual("hogwarts")
    })
    it("should get name from getName function", () => {
        const newEmployee = new Intern("Josh", 1, "name@example.com", "hogwarts", "Intern");
        expect(newEmployee.getName()).toEqual("Josh")
    })
    it("should get ID from getId function", () => {
        const newEmployee = new Intern("Josh", 1, "name@example.com", "hogwarts", "Intern");
        expect(newEmployee.getId()).toEqual(1)
    })
    it("should get email from getEmail function", () => {
        const newEmployee = new Intern("Josh", 1, "name@example.com", "hogwarts", "Intern");
        expect(newEmployee.getEmail()).toEqual("name@example.com")
    })
    it("should get school from getSchool function", () => {
        const newEmployee = new Intern("Josh", 1, "name@example.com", "hogwarts", "Intern")
        expect(newEmployee.getSchool()).toEqual("hogwarts")
    })
    it("should get role from getRole function", () => {
        const newEmployee = new Intern("Josh", 1, "name@example.com", "hogwarts", "Intern")
        expect(newEmployee.getRole()).toEqual("Intern")
    })

})