/**
 * [promise in ]
 */
SelfTimer.prototype.in = function(condition) {
  var _Condition = condition;

  // private variables
  var _msg = this.messages();
  var _h = this.helpers();
  var _fmt = this.formats();

  var _current = this.D;
  var _date = this.D.getDate();
  var _month = this.D.getMonth() + 1;
  var _year = this.D.getFullYear();

  /**
   * @param {[ Integer ]} day [* less than 31]
   * @return {[ Resolve ]}
   */
  var Day = function(day) {
    return new Promise(function(resolve, reject) {
      try {
        if (parseInt(day) > 31) throw __msg.day;

        var num = day < 10 ? "0" + day : day;

        return day == _date
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! Day()

  /**
   * [ in().Days description ]
   * @param  {[ Array ]} days [description]
   * @return {[ Resolve ]}      [description]
   */
  var Days = function(days) {
    return new Promise(function(resolve, reject) {
      try {
        if (!Array.isArray(days)) throw _msg.isNotArray;

        var array = days.map(function(res) {
          // convert elemetnts to Integer in array
          return parseInt(res);
        });

        return _h.__contains(array, _date)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! Days()

  /**
   * @param  {[ Integer ]} from
   * @param  {[ Integer ]} to
   * @return {[ Resolve ]}
   */
  var DaysBetween = function(from, to) {
    return new Promise(function(resolve, reject) {
      try {
        var start = parseInt(from);
        var end = parseInt(to);

        if (start > 30) throw _msg.startDay;

        if (end > 31) throw _msg.endDay;

        var arr = _h.__range(end, end - start);
        arr.push(from);

        return _h.__contains(arr, _date)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! DaysBetween()

  /**
   * @param {[ Integer ]} month
   * @return {[ Resolve ]}
   */
  var Month = function(month) {
    return new Promise(function(resolve, reject) {
      try {
        if (parseInt(month) > 12) throw _msg.month;

        var num = month < 10 ? "0" + month : month;

        return num == _month
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! Month()

  /**
   * [MonthSelects description]
   * @param  {[ Integer ]} months
   * @return {[ Resolve ]}
   */
  var MonthSelects = function(months) {
    return new Promise(function(resolve, reject) {
      try {
        if (!Array.isArray(months)) throw _msg.isNotArray;

        return _h.__contains(months, _month)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! MonthSelects

  /**
   * @param {[ Integer ]} year
   * @return {[ Function ]}
   */
  var Year = function(year) {
    return new Promise(function(resolve, reject) {
      try {
        if (!year.toString().match(_fmt.year)) throw _msg.year;

        return year == _year
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! Year()

  var REGISTER = {
    Day: Day,
    Days: Days,
    DaysBetween: DaysBetween,
    Month: Month,
    MonthSelects: MonthSelects,
    Year: Year
  }; // ! REGISTER

  return REGISTER;
}; // ! SelfTimer.prototype.in()
