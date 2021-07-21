const Employee = require("../utils/Employee")
const SoftwareEngineer = require("../utils/SoftwareEngineer")


describe("SoftwareEngineer", () => {
    it("SoftwareEngineer class should be an instance of Employee class", () => {
        const newEmployee = new SoftwareEngineer();
        expect(newEmployee).toBeInstanceOf(Employee)
      })
    it("should create SoftwareEngineer object", () => {
        const newEmployee = new SoftwareEngineer()
        expect(typeof newEmployee).toEqual("object")
    })
    it("should create SoftwareEngineer class with name", () => {
        const newEmployee = new SoftwareEngineer("Josh");
        expect(newEmployee.name).toEqual("Josh")
    })
    it("should create SoftwareEngineer class with id", () => {
        const newEmployee = new SoftwareEngineer("Josh", 1);
        expect(newEmployee.id).toEqual(1)
    })
    it("should create SoftwareEngineer class with email", () => {
        const newEmployee = new SoftwareEngineer("Josh", 1, "name@example.com");
        expect(newEmployee.email).toEqual("name@example.com")
    })
    it("should create SoftwareEngineer class with github", () => {
        const newEmployee = new SoftwareEngineer("Josh", 1, "name@example.com", "github");
        expect(newEmployee.github).toEqual("github")
    })
    it("should get name from getName function", () => {
        const newEmployee = new SoftwareEngineer("Josh", 1, "name@example.com", "github", "Software Engineer");
        expect(newEmployee.getName()).toEqual("Josh")
    })
    it("should get ID from getId function", () => {
        const newEmployee = new SoftwareEngineer("Josh", 1, "name@example.com", "github", "Software Engineer");
        expect(newEmployee.getId()).toEqual(1)
    })
    it("should get email from getEmail function", () => {
        const newEmployee = new SoftwareEngineer("Josh", 1, "name@example.com", "github", "Software Engineer");
        expect(newEmployee.getEmail()).toEqual("name@example.com")
    })
    it("should get name from getRole() function", () => {
        const newEmployee = new SoftwareEngineer("Josh", 1, "name@example.com", "github", "Software Engineer")
        expect(newEmployee.getRole()).toEqual("Software Engineer")
    })

})