'use strict'

const selfTimer = require('../src/build/es5/intermediate/selftimer');

describe('SelfTimer.js on method Test', () => {

    const _str = "working";

    it('is() True() test', () => {

        const task = new selfTimer(new Date());

        var condition = true;

        const callback = task.is().True(condition, function() {
          return _str;
        })
        
        expect(callback).toBe(_str);
        expect(task.is().True(condition)).toBeTruthy();

    });
    
    it('is() False() test', () => {
    
        const task = new selfTimer(new Date());
    
        var condition = false;
    
        const callback = task.is().False(condition, function() {
            return _str;
        })
    
        expect(callback).toBe(_str);
        expect(task.is().False(condition)).toBeTruthy();
    
    });

});
