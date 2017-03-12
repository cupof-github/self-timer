/**
 * [in es5 ]
 * @type {[type]}
 */
SelfTimer.prototype.in = function(condition) {
  var _Condition = condition;

  var _Chain = true;

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
   * @param {[ Function ]} task
   * @return {[ Function ]}
   */
  var Day = function(day, task) {
    if (this._Chain == false) return;

    if (_h.__checkIsValid(task)) {
      try {
        if (parseInt(day) > 31) throw __msg.day;

        var num = day < 10 ? "0" + day : day;

        if (day == _date) {
          return task !== undefined ? task() : _Condition == true ? this : true;
        } else {
          this._Chain = false;
          return _Condition == true ? this : false;
        }
      } catch (e) {
        console.error(e);
        return;
      }
    } // ! if()
  };

  /**
   * [ in().Days description ]
   * @param  {[ Array ]} days [description]
   * @param  {[ Function ]} task [ callback ]
   * @return {[ Function ]}      [description]
   */
  var Days = function(days, task) {
    if (this._Chain == false) return;

    if (_h.__checkIsValid(task)) {
      try {
        if (!Array.isArray(days)) throw _msg.isNotArray;

        var array = days.map(function(res) {
          // convert elemetnts to Integer in array
          return parseInt(res);
        });

        if (_h.__contains(array, _date)) {
          return task !== undefined ? task() : _Condition == true ? this : true;
        } else {
          this._Chain = false;
          return _Condition == true ? this : false;
        }
      } catch (e) {
        console.error(e);
        return;
      }
    } // ! if()
  };

  /**
   * @param  {[ Integer ]}
   * @param  {[ Integer ]} end
   * @param  {[ Function ]} task  [ callback ]
   * @return {[type]} [ Your callback ]
   */
  var DaysBetween = function(from, to, task) {
    if (this._Chain == false) return;

    if (_h.__checkIsValid(task)) {
      try {
        var start = parseInt(from);
        var end = parseInt(to);

        if (start > 30) throw _msg.startDay;

        if (end > 31) throw _msg.endDay;

        var arr = _h.__range(end, end - start);
        arr.push(from);

        if (_h.__contains(arr, _date)) {
          return task !== undefined ? task() : _Condition == true ? this : true;
        } else {
          this._Chain = false;
          return _Condition == true ? this : false;
        }
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
  }; // ! DaysBetween()

  /**
   * @param month: Integer
   * @param task: Function
   * @return {[ Function ]}
   */
  var Month = function(month, task) {
    if (this._Chain == false) return;

    if (_h.__checkIsValid(task)) {
      try {
        if (parseInt(month) > 12) throw _msg.month;

        var num = month < 10 ? "0" + month : month;

        if (num == _month) {
          return task !== undefined ? task() : _Condition == true ? this : true;
        } else {
          this._Chain = false;
          return _Condition == true ? this : false;
        }
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
  }; // ! Month()

  /**
   * @param {[ Integer ]} month
   * @param {[ Function ]} task
   * @return {[ Function ]}
   */
  var MonthSelects = function(months, task) {
    if (this._Chain == false) return;

    if (_h.__checkIsValid(task)) {
      if (!Array.isArray(months)) throw _msg.isNotArray;

      if (_h.__contains(months, _month)) {
        return task !== undefined ? task() : _Condition == true ? this : true;
      } else {
        this._Chain = false;
        return _Condition == true ? this : false;
      } // ! Exception
    } // ! if()
  }; // ! MonthSelects

  /**
   * @param {[ Integer ]} year
   * @param {[ Function ]} task
   * @return {[ Function ]}
   */
  var Year = function(year, task) {
    if (this._Chain == false) return;

    if (_h.__checkIsValid(task)) {
      try {
        if (!year.toString().match(_fmt.year)) throw _msg.year;

        if (year == _year) {
          return task !== undefined ? task() : _Condition == true ? this : true;
        } else {
          this._Chain = false;
          return _Condition == true ? this : false;
        }
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
  }; // ! Year()

  var REGISTER = {
    Day: Day,
    Days: Days,
    DaysBetween: DaysBetween,
    Month: Month,
    MonthSelects: MonthSelects,
    Year: Year
  }; // REGISTER

  return REGISTER;
}; // ! SelfTimer.prototype.in
