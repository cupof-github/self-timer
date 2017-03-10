"use strict";

/**
 * [SelfTimer description]
 * @param {[type]} date [description]
 */
function SelfTimer(date) {
  this.D = date;
}

/**
 * [helpers description]
 * @return {[type]} [description]
 */
SelfTimer.prototype.helpers = function() {
  var _current = this.D;
  var _day = this.D.getDay();

  /**
     * [__checkIsValid description]
     * @param  {[type]} variable [description]
     * @return {[type]}          [description]
     */
  var __checkIsValid = function(variable) {
    return typeof variable == "function" || variable == undefined
      ? true
      : false;
  };

  /**
     * [ check contain object in array ]
     * @param  {[ Array ]} array
     * @param  {[ Any ]} object
     * @return {[ Bool ]}
     * Ref: http://stackoverflow.com/a/237176/2704539
     * @exp __contains(array, 7)
     */
  var __contains = function(array, object) {
    var i = array.length;

    while (i--) {
      if (array[i] === object) return true;
    }

    return false;
  }; // ! __contains()

  /**
     * [ Replace a strings to individual numbers in array ]
     * @param  {[ Array ]} arr
     * @return {[ Array ]}
     */
  var __dayOfTheWeekStringToNumber = function(arr) {
    return arr
      .map(function(res) {
        return res.replace(/Sun/g, 0);
      })
      .map(function(res) {
        return res.replace(/Mon/g, 1);
      })
      .map(function(res) {
        return res.replace(/Tue/g, 2);
      })
      .map(function(res) {
        return res.replace(/Wed/g, 3);
      })
      .map(function(res) {
        return res.replace(/Thu/g, 4);
      })
      .map(function(res) {
        return res.replace(/Fri/g, 5);
      })
      .map(function(res) {
        return res.replace(/Sat/g, 6);
      })
      .map(function(res) {
        return parseInt(res);
      });
  }; // ! __dayOfTheWeekStringToNumber()

  /**
     * @param  {[ String ]} d [ Timeformat * 8:30 AM, 5:00 pm]
     * @return {[String]}   [description]
     * Ref: http://stackoverflow.com/a/26078713/2704539
     */
  var __timeObject = function(d) {
    var parts = d.split(/:|\s/), date = new Date();

    if (parts.pop().toLowerCase() == "pm") parts[0] = +parts[0] + 12;

    date.setHours(+parts.shift());
    date.setMinutes(+parts.shift());
    return date;
  }; // ! __timeObject()

  /**
     * @param  {[ Integer ]} start
     * @param  {[ Integer ]} count
     * @return {[ Array ]}
     * Ref: http://stackoverflow.com/a/3746752/2704539
     */
  var __range = function(start, count) {
    if (arguments.length == 1) {
      count = start;
      start = 0;
    }

    var arr = [];

    for (var i = 0; i < count; i++) {
      arr.push(start - i);
    }

    return arr;
  }; // ! __range()

  /**
     * @param  {[ Date ]} from
     * @param  {[ Date ]} to
     * @param  {[ Date ]} current
     * @return {[ Bool ]}
     */
  var __dateCompare = function(from, to, current) {
    return current < to.setDate(to.getDate() + 1) && current > from
      ? true
      : false;
  }; // ! __dateCompare()

  /**
    * @param  {[ Integer ]} from
    * @param  {[ Integer ]} to
    * @return {[ String]}      [ splieted Date]
    * Ref: http://stackoverflow.com/a/23593099/2704539
    */
  var __dateString = function() {
    var month = _current.getMonth() + 1;
    var day = _current.getDate();

    if (month.length < 2) month = "0" + month;

    if (day.length < 2) day = "0" + day;

    return [month, day].join("-");
  }; // ! __dateString()

  /**
   ** @param {[ String ]} type
    * @return {[Integer || bool]}
    */
  var __typeToMilliseconds = function(type) {
    var response;

    switch (type) {
      // a second
      case "s":
      case "sec":
      case "second":
      case "seconds":
        response = 1000;
        break;

      // a minute
      case "m":
      case "min":
      case "minute":
      case "minutes":
        response = 60000;
        break;

      default:
        response = false;
        break;
    } // ! switch()

    return response;
  }; // ! __typeToMilliseconds()

  /**
   * @return {[ String ]}
   */
  var __detectLang = function() {
    return navigator.userLanguage === "undefined"
      ? navigator.userLanguage
      : navigator.language;
  } // ! __detectLang()

  // Register methods
  var REGISTER = {
    __checkIsValid: __checkIsValid,
    __contains: __contains,
    __dayOfTheWeekStringToNumber: __dayOfTheWeekStringToNumber,
    __timeObject: __timeObject,
    __range: __range,
    __dateCompare: __dateCompare,
    __dateString: __dateString,
    __typeToMilliseconds: __typeToMilliseconds,
    __detectLang: __detectLang
  };

  return REGISTER;
};

SelfTimer.prototype.messages = function(val) {


  return {
    day: "Error: A day should be less than 31",
    month: "Error: month should be untll 12",
    date: "Error: date format shoud be MM-DD",
    year: "Error: date format shoud be 20YY",
    monthBetween: "Error: start of month should be less than end of month",
    startHour: "Error: start hour should be less than 23",
    endHour: "Error: end hour should be until 23",
    hourFormat: "Error: hours should be numberic",
    isNotValidHour: "Error: hour should be until 23",
    startDay: "Error: start day should be less than 30",
    endDay: "Error: end day should be untill 31",
    time: "Error: invalid time format. time should be [hh:mm AM or PM]",
    isNotArray: "Error: first argument shold be Array",
    dateGrater: "start date should not be grater than end-of -date",
    dateSameDay: "start and end date are should not be same date ",
    timeFormat: "Error: time of type formats",
    numFormat: "Error: num should be numberic",
    taskFormat: "Error: " + val + " should be object or function",
    notExist: "Error: " + val + " not exist",
    shouldBeFunction: "Error: " + val + " is shold be function"

  };
};

SelfTimer.prototype.formats = function() {
  return {
    date: /^(1[0-2]|[1-9])-([1-9]|[12]\d|3[0-1])$/,
    year: /^[2][0][1-9]{2}$/,
    annual: /^[2]{1}[0]{1}[1-3]{1}[0-9]{1}-[01]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/,
    time: /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/
  };
};

/**
 * [on description]
 * @return {[ Methods ]}
 */
SelfTimer.prototype.on = function() {
  // Private Variables
  var _current = this.D;
  var _day = this.D.getDay();
  var _message = this.messages();
  var _helper = this.helpers();
  var _format = this.formats();

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Sunday = function(task) {
    if (_helper.__checkIsValid(task)) {
      if (_day === 0) return task !== undefined ? task() : true;
    }
  }; // ! Sunday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Monday = function(task) {
    if (_helper.__checkIsValid(task)) {
      if (_day === 1) return task !== undefined ? task() : true;
    }
  }; // ! Monday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Tuesday = function(task) {
    if (_helper.__checkIsValid(task)) {
      if (_day === 2) return task != undefined ? task() : true;
    }
  }; // ! Tuesday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function ]} [ Your callback ]
   */
  var Wednesday = function(task) {
    if (_helper.__checkIsValid(task)) {
      if (_day === 3) return task !== undefined ? task() : true;
    }
  }; // ! Wednesday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Thursday = function(task) {
    if (_helper.__checkIsValid(task)) {
      if (_day === 4) return task !== undefined ? task() : true;
    }
  }; // ! Thursday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Friday = function(task) {
    if (_helper.__checkIsValid(task)) {
      if (_day === 5) return task !== undefined ? task() : true;
    }
  }; // ! Friday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Saturday = function(task) {
    if (_helper.__checkIsValid(task)) {
      if (_day === 6) return task !== undefined ? task() : true;
    }
  }; // ! Saturday()

  /**
   * @param {[ Array ]} weekOfDay
   *                   [ Sun, Mon, Tue, Wed, Thu, Fri, Sat]
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Selects = function(daysOfTheWeek, task) {
    if (_helper.__checkIsValid(task)) {
      try {
        if (!Array.isArray(daysOfTheWeek)) throw _message.isNotArray;

        // convert Date to week-number
        var arr = _helper.__dayOfTheWeekStringToNumber(daysOfTheWeek);

        if (_helper.__contains(arr, _day)) {
          return task !== undefined ? task() : true;
        } // ! if()
      } catch (e) {
        console.error(e);
        return;
      }
    } // ! if()
  }; // ! Selects()

  /**
   * [ This method is implement on Monday to Friday ]
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Weekdays = function(task) {
    if (_helper.__checkIsValid(task)) {
      // Monday to Friday
      var dayOfTheWeek = [1, 2, 3, 4, 5];

      if (_helper.__contains(dayOfTheWeek, _day)) {
        return task !== undefined ? task() : true;
      }
    }
  }; // ! Weekdays()

  /**
   * [ This method is implement on Saturday and Sunday ]
   * @param  {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Weekend = function(task) {
    if (_helper.__checkIsValid(task)) {
      // Sunday and Saturday
      var dayOfTheWeek = [0, 6];

      if (_helper.__contains(dayOfTheWeek, _day)) {
        return task !== undefined ? task() : true;
      }
    } // ! if
  }; // ! Weekend()

  /**
   * @param {[ String ]} date [MM-dd]
   * @param {[ Function ]} task
   * @return {[ Function ]}
   */
  var Annual = function(date, task) {
    if (_helper.__checkIsValid(task)) {
      try {
        if (!date.match(_format.date)) throw _message.date;

        if (date == _helper.__dateString())
          return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      }
    } // ! if()
  }; // ! Annual()

  /**
   * PASS
   * [dateBetween description]
   * @param  {[ String ]} from [ * YYYY-MM-DD ]
   * @param  {[ String]} to   [ * YYYY-MM-DD ]
   * @param  {[ Function ]} task [ callback ]
   * @return {[ Function ]}      [ callback ]
   */
  var DatesBetween = function(from, to, task) {
    if (_helper.__checkIsValid(task)) {
      var start = new Date(from);
      var end = new Date(to);

      try {
        if (start > end) throw _message.dateGrater;

        if (start == end) throw _message.dateSameDay;

        if (_helper.__dateCompare(start, end, _current))
          return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      }
    } // ! if()
  }; // ! DatesBetween()

  /**
   * [ check if dates is contained ]
   * @param  {[ Array ]} dates [ * YYYY-MM-DD ]
   * @param  {[ Function ]} task [ callback ]
   * @return {[ Function ]}      [ callback ]
   */
  var DatesContain = function(dates, task) {
    if (_helper.__checkIsValid(task)) {
      try {
        if (!Array.isArray(dates)) throw _message.isNotArray;

        if (_helper.__contains(dates, _current.toISOString().slice(0, 10)))
          return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      }
    } // ! if()
  }; // ! DatesContain()

  // Register methods
  var REGISTER = {
    Sunday: Sunday,
    Monday: Monday,
    Tuesday: Tuesday,
    Wednesday: Wednesday,
    Thursday: Thursday,
    Friday: Friday,
    Saturday: Saturday,
    Selects: Selects,
    Weekdays: Weekdays,
    Weekend: Weekend,
    Annual: Annual,
    DatesBetween: DatesBetween,
    DatesContain: DatesContain
  };

  return REGISTER;
};

/**
 * [at as ES5]
 * @return {[type]} [description]
 */
SelfTimer.prototype.at = function() {
  /**
     * private variables
     */
  var _Current = this.D;
  var _day = this.D.getDay();
  var _hour = this.D.getHours();
  var _message = this.messages();
  var _helper = this.helpers();
  var _format = this.formats();

  /**
     * [ at().Between description ]
     * @param  {[ String ]} from [ time format * hh:mm ]
     * @param  {[ String ]} to   [ time format * hh:mm ]
     * @param  {[ Function ]} task  [ callback ]
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
  var Between = function(from, to, task) {
    if (_helper.__checkIsValid(task)) {
      try {
        // check time format for start time
        if (!from.match(_format.time)) throw _message.time + "at start";

        // check time format for end time
        if (!to.match(_format.time)) throw _message.time + " at end";

        // check if current time is available
        var available = _Current < _helper.__timeObject(to) &&
          _Current > _helper.__timeObject(from)
          ? true
          : false;

        if (available) return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      }
    } // ! if()
  }; // ! Between()

  /**
     * [ at().Unless description]
     * @param {[ String ]} from [ time format * hh:mm ]
     * @param {[ String ]} to [ time format * hh:mm ]
     * @param {[ Function ]} task
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
  var Unless = function(from, to, task) {
    if (_helper.__checkIsValid(task)) {
      try {
        // check time format for start time
        if (!from.match(_format.time)) throw _message.time + "at start";

        // check time format for end time
        if (!to.match(_format.time)) throw _message.time + " at end";

        // check if current time is available
        var available = _Current < _helper.__timeObject(to) &&
          _Current > _helper.__timeObject(from)
          ? true
          : false;

        if (!available) return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      }
    }
  }; // ! Unless()

  /**
     * [ at().Hour description]
     * @param  {[ Integer ]} hour [ 0 - 23 ]
     * @param  {[ Function ]} task [description]
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
  var Hour = function(hour, task) {
    if (_helper.__checkIsValid(task)) {
      var time = parseInt(hour);

      try {
        if (time > 23) throw _message.startHour;

        if (time === _hour) return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      }
    } // ! if()
  }; // ! Hour()

  /**
     * PASS!
     * [ at().HoursBetween description ]
     * @param  {[ Integer ]} from [ Start hour 0 - 23 ]
     * @param  {[ Integer ]} to   [ End hour 0 - 23 ]
     * @param {[ Function ]} task
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
  var HoursBetween = function(from, to, task) {
    if (_helper.__checkIsValid(task)) {
      var start = parseInt(from);
      var end = parseInt(to);

      try {
        if (start > 23) throw _message.startHour;

        if (end > 23) throw _message.endHour;

        var arr = _helper.__range(end, end - start);
        arr.push(from);

        if (_helper.__contains(arr, _hour)) {
          return task !== undefined ? task() : true;
        } // ! if()
      } catch (e) {
        console.error(e);
        return;
      }
    }
  }; // ! HoursBetween()

  /**
   * [at().HourSelects]
   * @param  {[ array ]} hours [ 0 - 23 ]
   * @param  {[ Function ]} task [description]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var HourSelects = function(hours, task) {
    if (_helper.__checkIsValid(task)) {
      try {
        if (!Array.isArray(hours)) throw _message.isNotArray;

        // check array elements if numberic
        if (!hours.some(isNaN) != true) throw _message.hourFormat;

        var array = hours
          .map(function(res) {
            // convert elemetnts to Integer in array
            return parseInt(res);
          });

          array.map(function(res) {
            // check elements if valid hour format
            if (res > 23) throw _message.isNotValidHour;
          });

        if (_helper.__contains(array, _hour)) {
          return task !== undefined ? task() : true;
        } // ! if
      } catch (e) {
        console.error(e);
        return;
      }
    } // ! if()
  }; // ! HourSelects()

  // Register methods
  var REGISTER = {
    Between: Between,
    Unless: Unless,
    Hour: Hour,
    HoursBetween: HoursBetween,
    HourSelects: HourSelects
  };

  return REGISTER;
};

/**
 * [in es5 ]
 * @type {[type]}
 */
SelfTimer.prototype.in = function(condition) {
  var _Condition = condition;

  var _Chain = true;

  // private variables
  var _message = this.messages();
  var _helper = this.helpers();
  var _format = this.formats();

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

    if (_helper.__checkIsValid(task)) {
      try {
        if (parseInt(day) > 31) throw __message.day;

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

    if (_helper.__checkIsValid(task)) {
      try {
        if (!Array.isArray(days)) throw _message.isNotArray;

        var array = days.map(function(res) {
          // convert elemetnts to Integer in array
          return parseInt(res);
        });

        if (_helper.__contains(array, _date)) {
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
     * PASS
     * @param  {[ Integer ]}
     * @param  {[ Integer ]} end
     * @param  {[ Function ]} task  [ callback ]
     * @return {[type]} [ Your callback ]
     */
  var DaysBetween = function(from, to, task) {
    if (this._Chain == false) return;

    if (_helper.__checkIsValid(task)) {
      try {
        var start = parseInt(from);
        var end = parseInt(to);

        if (start > 30) throw _message.startDay;

        if (end > 31) throw _message.endDay;

        var arr = _helper.__range(end, end - start);
        arr.push(from);

        if (_helper.__contains(arr, _date)) {
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
     * PASS!
     * @param month: Integer
     * @param task: Function
     * @return {[ Function ]}
     * []
     */
  var Month = function(month, task) {
    if (this._Chain == false) return;

    if (_helper.__checkIsValid(task)) {
      try {
        if (parseInt(month) > 12) throw _message.month;

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
      }
    } // ! if()
  };

  /**
     * @param {[ Integer ]} month
     * @param {[ Function ]} task
     * @return {[ Function ]}
     */
  var MonthSelects = function(months, task) {
    if (this._Chain == false) return;

    if (_helper.__checkIsValid(task)) {
      if (!Array.isArray(months)) throw _message.isNotArray;

      if (_helper.__contains(months, _month)) {
        return task !== undefined ? task() : _Condition == true ? this : true;
      } else {
        this._Chain = false;
        return _Condition == true ? this : false;
      }
    } // ! if()
  };

  /**
     * @param {[ Integer ]} year
     * @param {[ Function ]} task
     * @return {[ Function ]}
     */
  var Year = function(year, task) {
    if (this._Chain == false) return;

    if (_helper.__checkIsValid(task)) {
      try {
        if (!year.toString().match(_format.year)) throw _message.year;

        if (year == _year) {
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

  // register methods
  var REGISTER = {
    Day: Day,
    Days: Days,
    DaysBetween: DaysBetween,
    Month: Month,
    MonthSelects: MonthSelects,
    Year: Year
  };

  return REGISTER;
};

/**
 * [isTrue description]
 * @type {Boolean}
 */
SelfTimer.prototype.is = function() {
  /**
     * [ if condition is true, return callback ]
     * @param {[ Bool ]} condition
     * @param {[ Function ]} task
     * @return {[ Function ]}
     */
  var True = function(condition, task) {
    if (condition) return task !== undefined ? task() : true;
  }; // ! True()

  /**
     * [ if condition is false, return callback ]
     * @param {[ Bool ]} condition
     * @param {[ Function ]} task
     * @return {[ Function ]}
     */
  var False = function(condition, task) {
    if (!condition) return task !== undefined ? task() : true;
  }; // ! False()

  /**
     * [ if match browser language value, return callback ]
     * @param {[ String ]} lang
     * @param {[ Function ]} task
     * @return {[ Function ]}
     * @coderef https://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx
     */
  var Language = function(lang, task) {
    var detect = navigator.userLanguage === "undefined"
      ? navigator.userLanguage
      : navigator.language;

    if (lang == detect) return task !== undefined ? task() : true;
  }; // ! Language()

  /**
     * [ if match browser language value, return callback, but this one enable short value ]
     * @param {[ String ]} lang
     * @param {[ Function ]} task
     * @return {[ Function ]}
     */
  var Lang = function(lang, task) {
    var detect = navigator.userLanguage === "undefined"
      ? navigator.userLanguage
      : navigator.language;

    if (lang == detect.slice(0, 2)) return task !== undefined ? task() : true;
  }; // ! Lang()

  // register methods
  var REGISTER = {
    True: True,
    False: False,
    Language: Language,
    Lang: Lang
  };

  return REGISTER;
};

/**
 * ES5
 * [SelfTimer.prototype.timer ]
 * @return {[ Methods ]}
 */
SelfTimer.prototype.timer = function() {
  var _message = this.messages();
  var _helper = this.helpers();

  /**
    * [ timer().After ]
    * @param {[ String ]} type [min, sec ...]
    * @param {[ Integer || String of Number ]} num
    * @param {[ Function ]} task
    * @return {[ Function ]}
    */
  var After = function(type, num, task) {
    var milliseconds = _helper.__typeToMilliseconds(type);

    var taskType = typeof task;

    try {
      // checking type : second, minute .. and so
      if (!milliseconds) throw _message.timeFormat;

      // check num
      if (isNaN(num)) throw _message.numFormat;
      if (num === 0 || num === "0") throw _message.numFormat;

      if (!_helper.__contains(["object", "function"], taskType))
        throw this.messages("type").taskFormat;

      if (taskType === "object") {
        // check exists keys
        if (!("before" in task)) throw this.messages("key:before").notExist;
        if (!("before" in task)) throw this.messages("key:after").notExist;

        // value validation in object
        if (typeof task.before !== "function")
          throw this.messages("before").shouldBeFunction;
        if (typeof task.after !== "function")
          throw this.messages("after").shouldBeFunction;

        // execute callback in before
        task.before();

        return setTimeout(
          function() {
            // execute callback in after
            return task.after();
          },
          num * milliseconds
        ); // ! setTimeout()
      } // ! if(taskType === "object")

      if (taskType === "function") {
        return setTimeout(
          function() {
            return task();
          },
          num * milliseconds
        ); // ! setTimeout()
      } // ! if(taskType === "function")
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! After()

  /**
    * [ timer().Every ]
    * @param {[ String ]} type [min, sec ...]
    * @param {[ Integer || String of Number ]} num
    * @param {[ Function ]} task
    * @return {[ Function ]}
    */
  var Every = function(type, num, task) {
    var milliseconds = _helper.__typeToMilliseconds(type);

    var taskType = typeof task;

    try {
      // checking type : second, minute .. and so
      if (!milliseconds) throw _message.timeFormat;

      // check num
      if (isNaN(num)) throw _message.numFormat;
      if (num === 0 || num === "0") throw _message.numFormat;

      if (!_helper.__contains(["object", "function"], taskType))
        throw this.messages("type").taskFormat;

      if (taskType === "object") {
        // check exists keys
        if (!("before" in task)) throw this.messages("key:before").notExist;
        if (!("before" in task)) throw this.messages("key:after").notExist;

        // value validation in object
        if (typeof task.before !== "function")
          throw this.messages("before").shouldBeFunction;
        if (typeof task.after !== "function")
          throw this.messages("after").shouldBeFunction;

        // execute callback in before
        task.before();

        return setInterval(
          function() {
            // execute callback in after
            return task.after();
          },
          num * milliseconds
        ); // ! setInterval()
      } // ! if(taskType === "object")

      if (taskType === "function") {
        return setInterval(
          function() {
            return task();
          },
          num * milliseconds
        ); // ! setInterval()
      } // ! if(taskType === "function")
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! Every()

  // register methods
  var REGISTER = {
    After: After,
    Every: Every
  };

  return REGISTER;
}; // ! SelfTimer.prototype.timer
