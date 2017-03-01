'use strict'

const selfTimer = require('../src/build/promise/intermediate/selftimer');

describe('SelfTimer.js on method Test', () => {

    const str = "working";

    const dayOfWeek = {
        Sun: '2016-10-30T03:24:00',
        Mon: '2016-10-31T03:24:00',
        Tue: '2016-11-01T03:24:00',
        Wed: '2016-11-02T03:24:00',
        Thu: '2016-11-03T03:24:00',
        Fri: '2016-11-04T03:24:00',
        Sat: '2016-11-05T03:24:00'
    };

    it('Sunday method Test', () => {

        // const task = (new selfTimer(new Date(dayOfWeek.Sun)));

        (new selfTimer(new Date(dayOfWeek.Sun)))
            .on(true)
            .Sunday()
            .then((res) => { expect(res).toBeTruthy() })
            .catch((res) => {  } );



    });

    it('Monday method Test', () => {

        (new selfTimer(new Date(dayOfWeek.Mon)))
            .on(true)
            .Monday()
            .then((res) => { expect(res).toBeTruthy() })
            .catch((res) => {  } );
    });

    it('Tuesday method Test', () => {

        (new selfTimer(new Date(dayOfWeek.Tue)))
          .on(true)
          .Tuesday()
          .then((res) => { expect(res).toBeTruthy() })
          .catch((res) => {  } );
    });

    it('Wednesday method Test', () => {

        (new selfTimer(new Date(dayOfWeek.Wed)))
          .on(true)
          .Wednesday()
          .then((res) => { expect(res).toBeTruthy() })
          .catch((res) => {  } );
    });

    it('Thursday method Test', () => {

        (new selfTimer(new Date(dayOfWeek.Thu)))
          .on(true)
          .Thursday()
          .then((res) => { expect(res).toBeTruthy() })
          .catch((res) => {  } );
    });

    it('Friday method Test', () => {

        (new selfTimer(new Date(dayOfWeek.Fri)))
          .on(true)
          .Friday()
          .then((res) => { expect(res).toBeTruthy() })
          .catch((res) => {  } );
    });

    it('Saturday method Test', () => {

        (new selfTimer(new Date(dayOfWeek.Sat)))
          .on(true)
          .Saturday()
          .then((res) => { expect(res).toBeTruthy() })
          .catch((res) => {  } );

    });

    it('Selects method Test', () => {
        // Friday
        const arr = ["Fri"];

        (new selfTimer(new Date(dayOfWeek.Fri)))
          .on(true)
          .Selects(arr)
          .then((res) => { expect(res).toBeTruthy() })
          .catch((res) => {  } );
    });

    it('Weekdays method Test', () => {

        (new selfTimer(new Date(dayOfWeek.Fri)))
          .on(true)
          .Weekdays()
          .then((res) => { expect(res).toBeTruthy() })
          .catch((res) => {  } );
    });

    it('Weekend method Test', () => {

        (new selfTimer(new Date(dayOfWeek.Sun)))
          .on(true)
          .Weekend()
          .then((res) => { expect(res).toBeTruthy() })
          .catch((res) => {  } );

    });

    it('Annual method Test', () => {

        const task = new selfTimer(new Date());

        // output exp: 11-2 1-31 *MM-DD
        let todayString = task.helpers().__dateString();

        task.on(true)
            .Annual(todayString)
            .then((res) => { expect(res).toBeTruthy() })
            .catch((res) => {  } );

    });

    // it('DateBetween method Test', () => {
    //
    //     const task = new selfTimer(new Date());
    //
    //     let todayString = task.helpers().__dateString();
    // });

    // it('DatesContain method Test', () => {
    //
    //   const dateArray = ["2017-03-01"];
    //
    //   const task = new selfTimer(new Date('2017-03-01'));
    //
    //   task.on(true)
    //       .DatesContain(dateArray)
    //       .then((res) => {
    //         console.log('valid');
    //       })
    //       .catch((res) => {
    //         console.log('inValid');
    //       });
    // });

});
