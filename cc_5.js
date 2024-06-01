U54107257
// Employee class
class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
      console.log(`Employee: ${this.name}, Monthly Salary: $${this.salary}`);
    }
  
    // Method to calculate annual salary
    annualSalary() {
      return this.salary * 12;
    }
  }
  
  // Test the Employee class
  const emp = new Employee('John Doe', 5000);
  console.log(`Annual Salary: $${emp.annualSalary()}`);

  // Manager class extending Employee
class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    // Override Annual Salary method to include bonus
    annualSalary() {
      const baseSalary = super.annualSalary();
      const bonus = baseSalary * 0.15;
      const totalSalary = baseSalary + bonus;
      console.log(`Manager: ${this.name}, Department: ${this.department}`);
      console.log(`Base Annual Salary: $${baseSalary}`);
      console.log(`Bonus: $${bonus}`);
      console.log(`Total Annual Salary: $${totalSalary}`);
      return totalSalary;
    }
  }
  
  // Test the Manager class
  const mgr1 = new Manager('Bob Ross', 6600, 'Digital Marketing');
  const mgr2 = new Manager('Debbie Little', 7205, 'Finance');
  
  mgr1.annualSalary();
  mgr2.annualSalary();
  
  // Test data and instantiation
const manager1 = new Manager('Bob Ross', 6600, 'Digital Marketing');
const manager2 = new Manager('Debbie Little', 7205, 'Finance');

// Calculate and log annual salaries for managers
manager1.annualSalary();
manager2.annualSalary();