abstract class Department {
  protected employees: string[] = [];
  static fiscalYear = 2020;

  protected constructor(protected readonly id: string, public name: string) {
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT DEPARTMENT - ID" + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found.");
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value.");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Ellie") {
      return;
    }
    this.employees.push(name);
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("3", []);
  }
}

const IT = new ITDepartment("d2", ["Ellie"]);
IT.addEmployee("Max");
IT.addEmployee("Manu");
IT.name = "NEW NAME";

console.log(IT);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(`accounting1: ${accounting}`);
console.log(`accounting2: ${accounting2}`);

accounting.addReport("Something went wrong");
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "ANOTHER REPORT";
accounting.printReports();
accounting.addEmployee("Ellie");
accounting.addEmployee("Max");
console.log(accounting);
accounting.describe();

const employee1 = Department.createEmployee("Ellie");
console.log(employee1);
console.log(`Fiscal Year: ${Department.fiscalYear}`);