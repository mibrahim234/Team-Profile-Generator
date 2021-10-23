// runs the app
// require all necessary files 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// creates output folder 
const OUTPUT_DIR = path.resolve(__dirname, "output");
// output path, puts html in output folder 
const outputPath = path.join(OUTPUT_DIR, "team.html");
// requires page template 
const render = require("./src/page-template");
// put code in to these empty arrays and them pushing it to the output 
const teamMembers = [];
const idArray = [];

function appMenu() {
    function createManager() {
        console.log("Welcome! Please Build Your Team.");
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "What is the team manager's name?",
                    validate: answer => {
                        if(answer !== '') {
                            return true;
                        }
                        return 'Please enter atleast one character.';
                    }
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "What is the team manager's id?",
                    validate: answer => {
                       const pass = answer.match(/^[1-9]\d*$/);
                        if(pass) {
                            return true;
                        }
                        return 'Please enter a number greater than zero.';
                    }
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is the team manager's email?",
                    validate: answer => {
                        const pass = answer.match
                        (/\S+@\S+\.\S+/);
                        if(pass) {
                            return true;
                        }
                        return 'Please enter a valid email address.';
                    }
                },
                {
                    type: "input",
                    name: "managerOfficeNumber",
                    message: "What is the team manager's office number?",
                    validate: answer => {
                       const pass = answer.match(/^[1-9]\d*$/);
                        if(pass) {
                            return true;
                        }
                        return 'Please enter a number greater than zero.';
                    }
                }
            ])
            .then(answers => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber
                );
                teamMembers.push(manager);
                idArray.push(answers.managerId);
                createTeam();
            });
    }
    function createTeam() {
        inquirer
        .prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?",
                choices: [
                    'Engineer',
                    'Intern',
                    "I don't want to add any more team members"
                ]
            }
        ])
        .then(userChoice => {
            switch(userChoice.memberChoice) {
                case 'Engineer':
                    addEngineer();
                    break;
                    case 'Intern':
                        addIntern();
                        break;
                        default:
                            buildTeam();
            }
        });
    }
    // app menu function bracket
     // engineer
     function addEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is the team engineer's name?",
                    validate: answer => {
                        if(answer !== '') {
                            return true;
                        }
                        return 'Please enter atleast one character.';
                    }
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "What is the team engineer's id?",
                    validate: answer => {
                       const pass = answer.match(/^[1-9]\d*$/);
                        if(pass) {
                            if (idArray.includes(answer)) {
                                return 'This ID is already taken. Please enter a different number.';
                            } else {
                                return true;
                            }
                        }
                        return 'Please enter a number greater than zero.';
                    }
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is the team engineer's email?",
                    validate: answer => {
                        const pass = answer.match
                        (/\S+@\S+\.\S+/);
                        if(pass) {
                            return true;
                        }
                        return 'Please enter a valid email address.';
                    }
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message: "What is the engineer's github username?",
                    validate: answer => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter a number greater than zero.';
                    }
                }
            ])
            .then(answers => {
                const engineer = new Engineer(
                    answers.engineerName,
                    answers.engineerId,
                    answers.engineerEmail,
                    answers.engineerGithub
                );
                teamMembers.push(engineer);
                idArray.push(answers.engineerId);
                createTeam();
            });
    }

    // intern
    function addIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is the team intern's name?",
                    validate: answer => {
                        if(answer !== '') {
                            return true;
                        }
                        return 'Please enter atleast one character.';
                    }
                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is the team intern's id?",
                    validate: answer => {
                       const pass = answer.match(/^[1-9]\d*$/);
                        if(pass) {
                            if (idArray.includes(answer)) {
                                return 'This ID is already taken. Please enter a different number.';
                            } else {
                                return true;
                            }
                        }
                        return 'Please enter a number greater than zero.';
                    }
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is the team intern's email?",
                    validate: answer => {
                        const pass = answer.match
                        (/\S+@\S+\.\S+/);
                        if(pass) {
                            return true;
                        }
                        return 'Please enter a valid email address.';
                    }
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What is the intern's school?",
                    validate: answer => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter a number greater than zero.';
                    }
                }
            ])
            .then(answers => {
                const intern = new Intern(
                    answers.internName,
                    answers.internId,
                    answers.internEmail,
                    answers.internGithub
                );
                teamMembers.push(intern);
                idArray.push(answers.internId);
                createTeam();
            });
    }

    function buildTeam() {
        // create the output director if the output path doesn't exist 
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        }
        fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
    }
    createManager();
}

appMenu();