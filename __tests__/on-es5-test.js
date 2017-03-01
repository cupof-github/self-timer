"use strict";

const selfTimer = require("../src/build/es5/intermediate/selftimer");

describe("SelfTimer.js on method Test", () => {
  const str = "working";

  const dayOfWeek = {
    Sun: "2016-10-30T03:24:00",
    Mon: "2016-10-31T03:24:00",
    Tue: "2016-11-01T03:24:00",
    Wed: "2016-11-02T03:24:00",
    Thu: "2016-11-03T03:24:00",
    Fri: "2016-11-04T03:24:00",
    Sat: "2016-11-05T03:24:00"
  };

  it("Sunday method Test", () => {
    const task = new selfTimer(new Date(dayOfWeek.Sun));

    const callback = task.on().Sunday(() => {
      return str;
    });

    expect(callback).toBe(str);
    expect(task.on().Sunday()).toBeTruthy();
  });

  it("Monday method Test", () => {
    const task = new selfTimer(new Date(dayOfWeek.Mon));

    const callback = task.on().Monday(() => {
      return str;
    });

    expect(callback).toBe(str);
    expect(task.on().Monday()).toBeTruthy();
  });

  it("Tuesday method Test", () => {
    const task = new selfTimer(new Date(dayOfWeek.Tue));

    const callback = task.on().Tuesday(() => {
      return str;
    });

    expect(callback).toBe(str);
    expect(task.on().Tuesday()).toBeTruthy();
  });

  it("Wednesday method Test", () => {
    const task = new selfTimer(new Date(dayOfWeek.Wed));

    const callback = task.on().Wednesday(() => {
      return str;
    });

    expect(callback).toBe(str);
    expect(task.on().Wednesday()).toBeTruthy();
  });

  it("Thursday method Test", () => {
    const task = new selfTimer(new Date(dayOfWeek.Thu));

    const callback = task.on().Thursday(() => {
      return str;
    });

    expect(callback).toBe(str);
    expect(task.on().Thursday()).toBeTruthy();
  });

  it("Friday method Test", () => {
    const task = new selfTimer(new Date(dayOfWeek.Fri));

    const callback = task.on().Friday(() => {
      return str;
    });

    expect(callback).toBe(str);
    expect(task.on().Friday()).toBeTruthy();
  });

  it("Saturday method Test", () => {
    const task = new selfTimer(new Date(dayOfWeek.Sat));

    const callback = task.on().Saturday(() => {
      return str;
    });

    expect(callback).toBe(str);
    expect(task.on().Saturday()).toBeTruthy();
  });

  it("Select method Test", () => {
    const task = new selfTimer(new Date(dayOfWeek.Fri));

    // Friday
    const arr = ["Fri"];

    const callback = task.on().Selects(arr, () => {
      return str;
    });

    expect(callback).toBe(str);
    expect(task.on().Selects(arr)).toBeTruthy();
  });

  it("Weekdays method Test", () => {
    const task = new selfTimer(new Date(dayOfWeek.Fri));

    const callback = task.on().Weekdays(function() {
      return str;
    });

    expect(callback).toBe(str);
    expect(task.on().Weekdays()).toBeTruthy();
  });

  it("Weekend method Test", () => {
    const task = new selfTimer(new Date(dayOfWeek.Sun));

    const callback = task.on().Weekend(function() {
      return str;
    });

    expect(callback).toBe(str);
    expect(task.on().Weekend()).toBeTruthy();
  });

  it("Annual method Test", () => {
    const task = new selfTimer(new Date());

    // output exp: 11-2 1-31 *MM-DD
    let todayString = task.helpers().__dateString();

    const callback = task.on().Annual(todayString, () => {
      return str;
    });

    expect(callback).toBe(str);
    expect(task.on().Annual(todayString)).toBeTruthy();
  });

  it("DateBetween method Test", () => {
    const task = new selfTimer(new Date());

    let todayString = task.helpers().__dateString();
  });

  it("DatesContain method Test", () => {
    const dateArray = ["2017-03-01"];

    const task = new selfTimer(new Date("2017-03-01"));

    const callback = task.on().DatesContain(dateArray, () => {
      return str;
    });

    expect(callback).toBe(str);

    expect(task.on().DatesContain(dateArray)).toBeTruthy();
  });
});
