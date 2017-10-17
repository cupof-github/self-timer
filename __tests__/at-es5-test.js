"use strict";

const selfTimer = require("../src/build/es5/intermediate/selftimer");

describe("SelfTimer.js *at group Test", () => {
  const _str = "working";

  it("SelfTimer at().Between Test", () => {
    let date = new Date();

    let start = date.getHours();

    const task = new selfTimer(date);

    const callback = task.at().Between("12:00 am", "12:59 am", function() {
      return _str;
    });

    // expect(callback).toBe(_str);
    // expect(task.at().Between('12:00 am', '12:59 am')).toBeTruthy();
  });

  it("SelfTimer at().Unless() Test", () => {
    let date = new Date();

    let start = date.getHours();

    const task = new selfTimer(date);

    const callback = task.at().Unless("1:00 pm", "5:46 pm", () => {
      return _str;
    });

    //  TODO: need check!
    // if (start != 17) {
    //
    //     expect(callback).toBeUndefined();
    //     expect(task.at().Unless('1:00 pm', '5:46 pm')).toBeFalsy();
    //
    // } else {
    //     expect(callback).toBe(_str);
    //     expect(task.at().Unless('1:00 pm', '5:46 pm')).toBeTruthy();
    //
    // }
  });

  it("SelfTimer at().Hour Test", () => {
    let date = new Date();
    const task = new selfTimer(date);

    const callback = task.at().Hour(date.getHours(), () => {
      return _str;
    });

    expect(callback).toBe(_str);
    expect(task.at().Hour(date.getHours())).toBeTruthy();
  });

  it("SelfTimer at().HoursBetween Test", () => {
    let date = new Date();

    const task = new selfTimer(date);

    const callback = task.at().HoursBetween(0, 23, () => _str);

    expect(callback).toBe(_str);
    expect(task.at().HoursBetween(0, 23)).toBeTruthy();
  });

  it("at().HourSelects Test", () => {
    let date = new Date();

    const hours = Array.from(Array(24).keys());

    const task = new selfTimer(date);

    const callback = task.at().HourSelects(hours, () => _str);

    expect(callback).toBe(_str);
  });

  it("at().Min Test", () => {
    const date = new Date("Tue Oct 17 2017 17:14:12 GMT+0900 (JST)");

    const task = new selfTimer(date);

    const callback = task.at().Min(14, () => _str);

    expect(callback).toBe(_str);
  });

  it("at().MinBetween Test", () => {
    let date = new Date("Tue Oct 17 2017 17:14:12 GMT+0900 (JST)");

    const task = new selfTimer(date);

    const callback = task.at().MinBetween(14, 17, () => _str);

    expect(callback).toBe(_str);
  });

  it("at().MinSelects Test", () => {
    let date = new Date("Tue Oct 17 2017 17:14:12 GMT+0900 (JST)");

    const task = new selfTimer(date);

    const callback = task.at().MinSelects([14, 17], () => _str);

    expect(callback).toBe(_str);
  });
});
