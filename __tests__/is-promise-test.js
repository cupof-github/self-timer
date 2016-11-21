'use strict'

const selfTimer = require('../src/build/promise/intermediate/selftimer');

describe('SelfTimer.js on method Test', () => {

    const _str = "working";

    it('is() True() test', () => {

        const task = new selfTimer(new Date());

        let status = true;

        task.is(true)
            .True(status)
            .then((res) => { expect(res).toBeTruthy()})
            .catch(() => {});
        
    });

    it('is() False() test', () => {

        const task = new selfTimer(new Date());

        var status = false;

        task.is().False(status)
                 .then((res) => { expect(res).toBeTruthy(); })
                 .catch(() => {});
    
    });

});
