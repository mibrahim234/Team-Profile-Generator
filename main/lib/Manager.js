const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getRole() {
        var role = "Manager";
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

    module.exports = Manager;