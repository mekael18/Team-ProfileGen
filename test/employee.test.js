const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should create an object with a name, id, and email', () => {
        let testClass = new Employee('Mike', 1, 'random@email');
        expect(typeof testClass).toBe('object')
    });

    it('should set the name of the employee', () => {
        let testName = 'Josh';
        let testClass = new Employee(testName, 1, 'random@email');
        expect(testClass.name).toBe(testName);
    });

    it('should set the id of the employee', () => {
        let testId = 20;
        let testClass = new Employee('Mike', testId, 'random@email');
        expect(testClass.id).toBe(testId);
    });

    it('should set the email of the employee', () => {
        let testEmail = 'your@email';
        let testClass = new Employee('Mike', 1, testEmail);
        expect (testClass.email).toBe(testEmail);
    });

    it('should get the name of the employee', () => {
        let testName = 'Josh';
        let testClass = new Employee(testName, 1, 'random@email');
        expect(testClass.getName()).toBe(testName);
    });

    it('should get the id of the employee', () => {
        let testId = 20;
        let testClass = new Employee('Mike', testId, 'random@email');
        expect(testClass.getId()).toBe(testId);
    });

    it('should get the email of the employee', () => {
        let testEmail = 'your@email';
        let testClass = new Employee('Mike', 1, testEmail);
        expect (testClass.getEmail()).toBe(testEmail);
    });

    it('should get the role of the employee', () => {
        let testRole = 'Employee';
        let testClass = new Employee('Mike', 1, 'random@email');
        expect (testClass.getRole()).toBe(testRole);
    });
});