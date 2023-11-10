const mysql = require('mysql2');
const inquirer = require('inquirer');


const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

const init = async () => {
  const { homepage } = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'homepage',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
      },

    ])
  switch (homepage) {
    case 'view all departments':
      viewAllDept()
      break;
    case 'view all roles':
      viewAllRoles()
      break;
    case 'view all employees':
      viewAllEmployees()
      break;
    case 'add a department':
      addDepartment()
      break;
    case 'add a role':
      createRole()
      break;
    case 'add an employee':
      addEmployee()
      break;
    case 'update an employee role':
      updateEmployee()
      break;
  }
}

const viewAllDept = async () => {
  const [data] = await db.promise().query("SELECT * FROM department")
  console.table(data)
  init()
}

const viewAllEmployees = async () => {
  const [data] = await db.promise().query("SELECT * FROM employee")
  console.table(data)
  init()
}

const viewAllRoles = async () => {
  const [data] = await db.promise().query("SELECT * FROM role")
  console.table(data)
  init()
}

const addDepartment = async () => {
  const { name } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'name of new department'
    }
  ])
  const [data] = await db.promise().query("INSERT INTO department set name = ?", name)
  console.log('department added')
  init()
}

const createRole = async () => {
  const [department] = await db.promise().query("SELECT id as value, name as name FROM department")
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'what is the title?',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'what is the salary?',
    },
    {
      type: 'list',
      name: 'department_id',
      message: 'what is the department',
      choices: department
    }
  ])
  await db.promise().query("INSERT INTO role set ?", response);
  console.log('role added');
  init();
}

const addEmployee = async () => {
  const [employee] = await db.promise().query("SELECT id as value, title as title FROM role")
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'what is the first name?',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'what is the last name?',
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'what is the role id',
      choices: employee
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'what is the manager id?',
    },
  ])
  await db.promise().query("INSERT INTO employee set ?", response);
  console.log('employee added');
  init();
}

init()

