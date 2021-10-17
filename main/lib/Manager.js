const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getRole() {
        return "Engineer";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

    module.exports = Manager;