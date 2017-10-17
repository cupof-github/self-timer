"use strict";

const selfTimer = require("../src/build/es5/intermediate/selftimer");

describe("SelfTimer.js *check group Test", () => {
  const _str = "working";

  let time = new Date("Tue Oct 17 2017 17:14:12 GMT+0900 (JST)");

  it("check() test. it is to be true", () => {
    const st = new selfTimer(time);

    var detect = st
      .check()
      .With(st.in().Year(2017))
      .With(st.in().Month(10))
      .With(st.at().Min(14))
      .With(st.on().Tuesday())
      .Done();

    expect(detect).toBeTruthy();
  });

  it("check() test. it is to be String", () => {
    const st = new selfTimer(time);

    var detect = st
      .check()
      .With(st.in().Year(2017))
      .With(st.in().Month(10))
      .With(st.at().Min(14))
      .With(st.on().Tuesday())
      .Done(() => _str);

    expect(detect).toBe(_str);
  });

  it("check() test. it is to be false", () => {
    const st = new selfTimer(time);

    var detect = st
      .check()
      .With(st.in().Year(2017))
      .With(st.in().Month(10))
      .With(st.at().Min(15))
      .With(st.on().Tuesday())
      .Done();

    expect(detect).toBeFalsy();
  });
});
