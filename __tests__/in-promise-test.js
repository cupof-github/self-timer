'use strict'

const selfTimer = require('../src/build/promise/intermediate/selftimer');

describe('SelfTimer.js in method Test', () => {

    it('in().Day() Test', () => {

        // test on day: Nov 3
        let date = new Date('11-3');

        const task = new selfTimer(date);
        
        task.in(true)
            .Day(3)
            .then((res) => expect(res).toBeTruthy())
            .catch((res) => {});

    });

    it('in().Days() Test', () => {

        // test on day: Nov 13
        let date = new Date('11-3');

        const task = new selfTimer(date);

        const days = [3, 11, 13]
        
        task.in(true)
            .Days(days)
            .then((res) => expect(res).toBeTruthy())
            .catch((res) => {});

    });

    it('in().DaysBetween() Test', () => {

        // test on day: Nov 13
        let date = new Date('11-3');

        const task = new selfTimer(date);
        
        task.in(true)
            .DaysBetween(3, 11)
            .then((res) => expect(res).toBeTruthy())
            .catch((res) => {});
            
    });

    it('in().Month() Test', () => {

        // test on day: Nov 13
        let date = new Date('11-3');

        const task = new selfTimer(date);
        
        task.in(true)
            .Month(11)
            .then((res) => expect(res).toBeTruthy())
            .catch((res) => {});

    });

    it('in().MonthSelects() Test', () => {

        // test on day: Nov 13
        let date = new Date('11-3');

        const task = new selfTimer(date);
        
        task.in(true)
            .MonthSelects([11, 12])
            .then((res) => expect(res).toBeTruthy())
            .catch((res) => {});

    });

    it('in().Year() Test', () => {

        // test on day: Nov 13
        let date = new Date('2016-11-03T03:24:00');

        const task = new selfTimer(date);
        
        task.in(true)
            .Year(2016)
            .then((res) => expect(res).toBeTruthy())
            .catch((res) => {});

    });

});
