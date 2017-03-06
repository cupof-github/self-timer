"use strict";

const selfTimer = require("../src/build/es5/intermediate/selftimer");

describe("SelfTimer.js on method Test", () => {
  const _str = "working!";

  it("in().Day() Test", () => {
    // test on day: Nov 3
    let date = new Date("11-3");

    const task = new selfTimer(date);

    let callback = task.in().Day(3, () => {
      // rewturn _str because with in 3
      return _str;
    });

    let func = task.in().Day(3);

    // callback
    expect(callback).toBe(_str);
    // true
    expect(func).toBeTruthy();
  });

  it("in().Days() Test", () => {
    // test on day: Nov 13
    let date = new Date("11-3");

    const task = new selfTimer(date);

    const days = [3, 11, 13];

    let callback = task.in().Days(days, () => {
      // return _str because with in 3
      return _str;
    });

    let func = task.in().Days(days);

    expect(callback).toBe(_str);
    expect(func).toBeTruthy();
  });

  it("in().DaysBetween() Test", () => {
    // test on day: Nov 13
    let date = new Date("11-3");

    const task = new selfTimer(date);

    // 3 to 11 th
    let callback = task.in().DaysBetween(3, 11, () => {
      // return _str because with in 3
      return _str;
    });

    let func = task.in().DaysBetween(3, 11);

    expect(callback).toBe(_str);
    expect(func).toBeTruthy();
  });

  it("in().Month() Test", () => {
    // test on day: Nov 13
    let date = new Date("11-3");

    const task = new selfTimer(date);

    let callback = task.in().Month(11, () => {
      return _str;
    });

    let func = task.in().Month(11);

    expect(callback).toBe(_str);
    expect(func).toBeTruthy();
    // expect(task.in().Month(12)).toBeUndefined()
  });

  it("in().MonthSelects() Test", () => {
    // test on day: Nov 13
    let date = new Date("11-3");

    const task = new selfTimer(date);

    let callback = task.in().MonthSelects([11, 12], () => {
      return _str;
    });

    let func = task.in().MonthSelects([11, 12]);

    expect(callback).toBe(_str);
    expect(func).toBeTruthy();
  });

  it("in().Year() Test", () => {
    // test on day: Nov 13
    let date = new Date("2016-11-03T03:24:00");

    const task = new selfTimer(date);

    let callback = task.in().Year(2016, () => {
      return _str;
    });

    let func = task.in().Year(2016);

    expect(callback).toBe(_str);
    expect(func).toBeTruthy();
    // expect(task.in().Year((date.getFullYear() + 1))).toBeUndefined();
  });
});
