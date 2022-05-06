const Employee = require("../utils/Employee")


describe('Employee', () => {
  it("should create Employee object", () => {
    const newEmployee = new Employee()
    expect(typeof newEmployee).toEqual("object")
  })
  it("should create Employee class with name", () => {
    const newEmployee = new Employee("Josh");
    expect(newEmployee.name).toEqual("Josh")
  })
  it("should create Employee class with id", () => {
    const newEmployee = new Employee("Josh", 1);
    expect(newEmployee.id).toEqual(1)
  })
  it("should create Employee class with email", () => {
    const newEmployee = new Employee("Josh", 1, "name@example.com");
    expect(newEmployee.email).toEqual("name@example.com")
  })
  it("should get name from getName function", () => {
    const newEmployee = new Employee("Josh", 1, "name@example.com");
    expect(newEmployee.getName()).toEqual("Josh")
  })
  it("should get ID from getId function", () => {
    const newEmployee = new Employee("Josh", 1, "name@example.com");
    expect(newEmployee.getId()).toEqual(1)
  })
  it("should get email from getEmail function", () => {
    const newEmployee = new Employee("Josh", 1, "name@example.com");
    expect(newEmployee.getEmail()).toEqual("name@example.com")
  })
  it("should get name from getRole function", () => {
    const newEmployee = new Employee("Josh", 1, "name@example.com")
    expect(newEmployee.getRole()).toEqual("Employee")
  })

})