const Employee = require("../utils/Employee")
const Manager = require("../utils/Manager")


describe("Manager", () => {
    it("Manager class should be an instance of Employee class", () => {
        const newEmployee = new Manager();
        expect(newEmployee).toBeInstanceOf(Employee)
      })
    it("should create Manager object", () => {
        const newEmployee = new Manager()
        expect(typeof newEmployee).toEqual("object")
    })
    it("should create Manager class with name", () => {
        const newEmployee = new Manager("Josh");
        expect(newEmployee.name).toEqual("Josh")
    })
    it("should create Manager class with id", () => {
        const newEmployee = new Manager("Josh", 1);
        expect(newEmployee.id).toEqual(1)
    })
    it("should create Manager class with email", () => {
        const newEmployee = new Manager("Josh", 1, "name@example.com");
        expect(newEmployee.email).toEqual("name@example.com")
    })
    it("should create Manager class with offic number", () => {
        const newEmployee = new Manager("Josh", 1, "name@example.com", 2);
        expect(newEmployee.officeNum).toEqual(2)
    })
    it("should get name from getName function", () => {
        const newEmployee = new Manager("Josh", 1, "name@example.com", 2, "Manager");
        expect(newEmployee.getName()).toEqual("Josh")
    })
    it("should get ID from getId function", () => {
        const newEmployee = new Manager("Josh", 1, "name@example.com", 2, "Manager");
        expect(newEmployee.getId()).toEqual(1)
    })
    it("should get email from getEmail function", () => {
        const newEmployee = new Manager("Josh", 1, "name@example.com", 2, "Manager");
        expect(newEmployee.getEmail()).toEqual("name@example.com")
    })
    it("should get office number from getOfficeNum() function", () => {
        const newEmployee = new Manager("Josh", 1, "name@example.com", 2, "Manager")
        expect(newEmployee.getOfficeNum()).toEqual(2)
    })
    it("should get role from getRole() function", () => {
        const newEmployee = new Manager("Josh", 1, "name@example.com", 2, "Manager")
        expect(newEmployee.getRole()).toEqual("Manager")
    })

})