const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('should set the github username of the engineer', () => {
        let testGithub = 'github.com/testuser';
        let testEngineer = new Engineer('Mike', 1, 'random@email', testGithub);
        expect(testEngineer.github).toBe(testGithub);
    });

    it('should get the github username of the engineer', () => {
        let testGithub = 'github.com/testuser';
        let testEngineer = new Engineer('Mike', 1, 'random@email', testGithub);
        expect(testEngineer.getGithub()).toBe(testGithub);
    });

    it('should get the role of the engineer', () => {
        let testEngineer = new Engineer('Mike', 1, 'random@email', 'github.com/testuser')
        expect(testEngineer.getRole()).toBe('Engineer');
    });
});