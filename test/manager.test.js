const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should set the office number of the manager', () => {
        let testOffice = '123';
        let testManager = new Manager('Mike', 1, 'random@email', testOffice);
        expect(testManager.office).toBe(testOffice);
    });

    it('should get the office number of the manager', () => {
        let testOffice = '123';
        let testManager = new Manager('Mike', 1, 'random@email', testOffice);
        expect(testManager.getOffice()).toBe(testOffice);
    });

    it('should get the role of the manager', () => {
        let testManager = new Manager('Mike', 1, 'random@email', '123')
        expect(testManager.getRole()).toBe('Manager');
    });
});