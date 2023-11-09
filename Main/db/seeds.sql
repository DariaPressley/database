INSERT INTO department (name)
VALUES ("HR"),
       ("Sales"),
       ("Purchasing"),
       ("Executive"),
       ("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("Director of Purchasing", "90000", 1),
       ("Director of Finance", "100000", 2),
       ("CFO", "120000", 3),
       ("CEO", "150000", 3),
       ("Assistant", "60000", 1);
       
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 2, 1),
       ("Jane", "Doe",3, 1),
       ("Steven", "Jones", 4 , 2),
       ("Mary", "Johnson", 2, 2),
       ("Anna", "Phillips", 5, 5);
