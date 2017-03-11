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
  }; // ! __detectLang()

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
  }; // ! REGISTER

  return REGISTER;
}; // ! SelfTimer.prototype.helpers

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
    shouldBeFunction: "Error: " + val + " is shold be function",
    onlyBrowser: "Error: " + val + " is just supported web-browser"
  };
}; // ! SelfTimer.prototype.messages

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
SelfTimer.prototype.on = function(condition) {
  var _Condition = condition;

  // Private Variables
  var _current = this.D;
  var _day = this.D.getDay();
  var _message = this.messages();
  var _helper = this.helpers();
  var _format = this.formats();

  /**
     * [ Sunday description ]
     * @return {[ Resolve ]}
     */
  var Sunday = function() {
    return new Promise(function(resolve, reject) {
      return _day === 0
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    }); // ! Promise()
  }; // ! Sunday()

  /**
     * [ Monday description ]
     * @return {[ Resolve ]}
     */
  var Monday = function() {
    return new Promise(function(resolve, reject) {
      return _day === 1
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    }); // ! Promise()
  }; // ! Monday()

  /**
     * [ Tuesday description ]
     * @return {[ Resolve ]}
     */
  var Tuesday = function() {
    return new Promise(function(resolve, reject) {
      return _day === 2
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    }); // ! Promise()
  }; // ! Tuesday()

  /**
     * [Wednesday description]
     * @return {[ Resolve ]}
     */
  var Wednesday = function() {
    return new Promise(function(resolve, reject) {
      return _day === 3
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    }); // ! Promise()
  }; // ! Wednesday()

  /**
     * [ Thursday description ]
     * @return {[ Resolve ]}
     */
  var Thursday = function() {
    return new Promise(function(resolve, reject) {
      return _day === 4
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    }); // ! Promise()
  }; // ! Thursday()

  /**
     * [ Friday description ]
     * @return {[ Resolve ]}
     */
  var Friday = function() {
    return new Promise(function(resolve, reject) {
      return _day === 5
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    }); // ! Promise()
  }; //! Friday()

  /**
     * [ Saturday description ]
     * @return {[ Resolve ]}
     */
  var Saturday = function() {
    return new Promise(function(resolve, reject) {
      return _day === 6
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    }); // ! Promise()
  }; // ! Saturday()

  /**
     * @param {[ Array ]} weekOfDay
     *                   [ Sun, Mon, Tue, Wed, Thu, Fri, Sat]
     * @return {[ Resolve ]}
     */
  var Selects = function(daysOfTheWeek) {
    return new Promise(function(resolve, reject) {
      try {
        if (!Array.isArray(daysOfTheWeek)) throw _message.isNotArray;

        // convert Date to week-number
        var arr = _helper.__dayOfTheWeekStringToNumber(daysOfTheWeek);

        return _helper.__contains(arr, _day)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
  }; // ! Selects()

  /**
     * [ This method is implement on Monday to Friday ]
     * @return {[ Resolve ]}
     */
  var Weekdays = function() {
    return new Promise(function(resolve, reject) {
      // Monday to Friday
      var dayOfTheWeek = [1, 2, 3, 4, 5];

      return _helper.__contains(dayOfTheWeek, _day)
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    }); // ! Promise()
  }; // ! Weekdays()

  /**
     * [ This method is implement on Saturday and Sunday ]
     * @return {[ Resolve ]}
     */
  var Weekend = function() {
    return new Promise(function(resolve, reject) {
      // Sunday to Saturday
      var dayOfTheWeek = [0, 6];

      return _helper.__contains(dayOfTheWeek, _day)
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    }); // ! Promise()
  }; // ! Weekend()

  /**
     * @param {[ String ]} date [MM-dd]
     * @return {[ Resolve ]}
     */
  var Annual = function(date) {
    return new Promise(function(resolve, reject) {
      try {
        if (!date.match(_format.date)) throw _message.date;

        return date == _helper.__dateString()
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
  }; // ! Annual()

  /**
   * [dateBetween description]
   * @param  {[ String ]} from [ * YYYY-MM-DD ]
   * @param  {[ String]} to   [ * YYYY-MM-DD ]
   * @return {[ Resolve ]}
   */
  var DatesBetween = function(from, to) {
    return new Promise(function(resolve, reject) {
      var start = new Date(from);
      var end = new Date(to);

      try {
        if (start > end) throw _message.dateGrater;

        if (start == end) throw _message.dateSameDay;

        return _helper.__dateCompare(start, end, _current)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
  }; // ! DatesBetween()

  /**
   * [ check if dates is contained ]
   * @param  {[ Array ]} dates [ * YYYY-MM-DD ]
   * @return {[ Resolve ]}
   */
  var DatesContain = function(dates) {
    return new Promise(function(resolve, reject) {
      try {
        if (!Array.isArray(dates)) throw _message.isNotArray;

        return _helper.__contains(dates, _current.toISOString().slice(0, 10))
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
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
  }; // ! REGISTER

  return REGISTER;
}; // ! SelfTimer.prototype.on

/**
 * [at as Promise]
 * @type {[type]}
 */
SelfTimer.prototype.at = function(condition) {
  var _Condition = condition;

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
     * @return {[ Resolve }
     */
  var Between = function(from, to) {
    return new Promise(function(resolve, reject) {
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

        return available
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
  }; // ! Between()

  /**
     * [ at().Unless description]
     * @param {[ String ]} from [ time format * hh:mm ]
     * @param {[ String ]} to [ time format * hh:mm ]
     * @return {[ Resolve ]}
     */
  var Unless = function(from, to) {
    return new Promise(function(resolve, reject) {
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

        return available
          ? _Condition === true ? reject(false) : false
          : resolve(true);
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
  }; // ! Unless()

  /**
     * [ at().Hour description]
     * @param  {[ Integer ]} hour [ 0 - 23 ]
     * @return {[ Resolve ]}
     */
  var Hour = function(hour) {
    return new Promise(function(resolve, reject) {
      var time = parseInt(hour);

      try {
        if (time > 23) throw _message.startHour;

        return time === _hour
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
  }; // ! Hour()

  /**
     * PASS!
     * [ at().HoursBetween description ]
     * @param  {[ Integer ]} from [ Start hour 0-23 ]
     * @param  {[ Integer ]} to   [ End hour 0 - 23 ]
     * @return {[ Resolve ]}
     */
  var HoursBetween = function(from, to) {
    return new Promise(function(resolve, reject) {
      var start = parseInt(from);
      var end = parseInt(to);

      try {
        if (start > 23) throw _message.startHour;

        if (end > 23) throw _message.endHour;

        var arr = _helper.__range(end, end - start);
        arr.push(from);

        return _helper.__contains(arr, _hour)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
  }; // ! HoursBetween()

  /**
    * [ at().HourSelects ]
    * @param  {[ Array ]} hours [ 0-23 ]
    * @return {[ Resolve ]}
    */
  var HourSelects = function(hours, task) {
    return new Promise(function(resolve, reject) {
      try {
        if (!Array.isArray(hours)) throw _message.isNotArray;
        // check array elements if numberic
        if (!hours.some(isNaN) != true) throw _message.hourFormat;

        var array = hours.map(function(res) {
          // convert elemetnts to Integer in array
          return parseInt(res);
        });

        array.map(function(res) {
          // check elements if valid hour format
          if (res > 23) throw _message.isNotValidHour;
        });

        return _helper.__contains(array, _hour)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
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
 * [promise in ]
 */
SelfTimer.prototype.in = function(condition) {
  var _Condition = condition;

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
     * @return {[ Resolve ]}
     */
  var Day = function(day) {
    return new Promise(function(resolve, reject) {
      try {
        if (parseInt(day) > 31) throw __message.day;

        var num = day < 10 ? "0" + day : day;

        return day == _date
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
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
        if (!Array.isArray(days)) throw _message.isNotArray;

        var array = days.map(function(res) {
          // convert elemetnts to Integer in array
          return parseInt(res);
        });

        return _helper.__contains(array, _date)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
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

        if (start > 30) throw _message.startDay;

        if (end > 31) throw _message.endDay;

        var arr = _helper.__range(end, end - start);
        arr.push(from);

        return _helper.__contains(arr, _date)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
  }; // ! DaysBetween()

  /**
     * @param {[ Integer ]} month
     * @return {[ Resolve ]}
     */
  var Month = function(month) {
    return new Promise(function(resolve, reject) {
      try {
        if (parseInt(month) > 12) throw _message.month;

        var num = month < 10 ? "0" + month : month;

        return num == _month
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
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
        if (!Array.isArray(months)) throw _message.isNotArray;

        return _helper.__contains(months, _month)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
  }; // ! MonthSelects

  /**
     * @param {[ Integer ]} year
     * @return {[ Function ]}
     */
  var Year = function(year) {
    return new Promise(function(resolve, reject) {
      try {
        if (!year.toString().match(_format.year)) throw _message.year;

        return year == _year
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      }
    }); // ! Promise()
  }; // ! Year()

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
 * Promise
 * [is() promise]
 */
SelfTimer.prototype.is = function(condition) {
  var _Condition = condition;

  // private variables
  var _helper = this.helpers();
  var _message = this.messages();

  /**
     * [ if status is true, return callback ]
     * @param {[ Bool ]} status
     * @param {[ Bool ]} condition
     * @return {[ Resolve ]}
     */
  var True = function(status) {
    return new Promise(function(resolve, reject) {
      return status
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    }); // ! Promise()
  }; // ! True()

  /**
     * - browser only! -
     * [ if status is false, return callback ]
     * @param {[ Bool ]} status
     * @param {[ Bool ]} condition
     * @return {[ Resolve ]}
     */
  var False = function(status) {
    return new Promise(function(resolve, reject) {
      return status
        ? _Condition === true ? reject(false) : false
        : resolve(true);
    }); // ! Promise()
  }; // ! False()

  /**
     * - browser only! -
     * [ if mutch browser language value, return callback ]
     * @param {[ String ]} lang
     * @param {[ Bool ]} condition
     * @return {[ Resolve ]}
     * @coderef https://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx
     */
  var Language = function(lang) {
    return new Promise(function(resolve, reject) {
      try {
        if (window === "undefined") throw this.messages("Language").onlyBrowser;

        return lang == _helper.__detectLang()
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! Language()

  /**
    * [ if match browser language value, return callback, but this one enable short value ]
    * @param {[ String ]} lang
    * @param {[ Bool ]} condition
    * @return {[ Function ]}
     */
  var Lang = function(lang) {
    return new Promise(function(resolve, reject) {
      try {
        if (window === "undefined") throw this.messages("Language").onlyBrowser;

        var detect = _helper.__detectLang();

        return lang == detect.slice(0, 2)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Proimse
  }; // ! Lang()

  /**
   * - browser only! -
   * @param {[ Array ]} languages
   * @return {[ Resolve ]}
   */
  var LanguageSelects = function(languages) {
    return new Promise(function(resolve, reject) {
      try {
        if (window === "undefined")
          throw this.messages("LanguageSelects").onlyBrowser;

        if (!Array.isArray(languages)) throw _message.isNotArray;

        return _helper.__contains(languages, _helper.__detectLang())
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Proimse
  }; // ! LanguageSelects()

  /**
   * - browser only! -
   * @param {[ Array ]} lang
   * @return {[ Resolve ]}
   */
  var LangSelects = function(lang) {
    try {
      if (window === "undefined")
        throw this.messages("LangSelects").onlyBrowser;

      if (!Array.isArray(lang)) throw _message.isNotArray;

      var detect = _helper.__detectLang();

      return _helper.__contains(lang, detect.slice(0, 2))
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! LangSelects()

  /**
   * - browser only! -
   * @param {[ Array ]} lang
   * @return {[ Resolve ]}
   */
  var LanguageExcepts = function(languages) {
    try {
      if (window === "undefined")
        throw this.messages("LanguageExcepts").onlyBrowser;

      if (!Array.isArray(languages)) throw _message.isNotArray;

      return !_helper.__contains(languages, _helper.__detectLang())
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! LanguageExcepts()

  /**
   * - browser only! -
   * @param {[ Array ]} lang
   * @return {[ Resolve ]}
   */
  var LangExcepts = function(lang) {
    try {
      if (window === "undefined")
        throw this.messages("LangExcepts").onlyBrowser;

      if (!Array.isArray(lang)) throw _message.isNotArray;

      var detect = _helper.__detectLang();

      return !_helper.__contains(lang, detect.slice(0, 2))
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! LangExcepts()

  // register methods
  var REGISTER = {
    True: True,
    False: False,
    Language: Language,
    Lang: Lang,
    LanguageSelects: LanguageSelects,
    LangSelects: LangSelects,
    LanguageExcepts: LanguageExcepts,
    LangExcepts: LangExcepts
  }; // ! REGISTER

  return REGISTER;
}; // ! SelfTimer.prototype.is()

/**
 * Promise
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
   * @return {[ Resolve ]}
   */
  var After = function(type, num, task) {
    return new Promise(function(resolve) {
      var milliseconds = _helper.__typeToMilliseconds(type);

      var taskType = typeof task;

      try {
        // checking type : second, minute .. and so
        if (!milliseconds) throw _message.timeFormat;

        // check num
        if (isNaN(num)) throw _message.numFormat;
        if (num === 0 || num === "0") throw _message.numFormat;

        if (!_helper.__contains(["object", "function", "undefined"], taskType))
          throw this.messages("type").taskFormat;

        if (taskType === "object") {
          // check exists keys
          if (!("before" in task)) throw this.messages("key:before").notExist;

          // value validation in object
          if (typeof task.before !== "function")
            throw this.messages("before").shouldBeFunction;

          // execute callback in before
          task.before();

          return setTimeout(
            function() {
              // execute callback resolve
              return resolve(true);
            },
            num * milliseconds
          ); // ! setTimeout()
        } else {
          // if (taskType === "function") {
          return setTimeout(
            function() {
              return resolve(true);
            },
            num * milliseconds
          ); // ! setTimeout()
        } // ! else
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    });
  }; // ! After()

  /**
   * [ timer().Every ]
   * @param {[ String ]} type [min, sec ...]
   * @param {[ Integer || String of Number ]} num
   * @return {[ Resolve ]}
   */
  // var Every = function(type, num) {
  //   return new Promise(function(resolve) {
  //     var milliseconds = _helper.__typeToMilliseconds(type);
  //
  //     var taskType = typeof task;
  //
  //     try {
  //       // checking type : second, minute .. and so
  //       if (!milliseconds) throw _message.timeFormat;
  //
  //       // check num
  //       if (isNaN(num)) throw _message.numFormat;
  //       if (num === 0 || num === "0") throw _message.numFormat;
  //
  //       if (!_helper.__contains(["object", "function", "undefined"], taskType))
  //         throw this.messages("type").taskFormat;
  //
  //       if (taskType === "object") {
  //         // check exists keys
  //         if (!("before" in task)) throw this.messages("key:before").notExist;
  //
  //         // value validation in object
  //         if (typeof task.before !== "function")
  //           throw this.messages("before").shouldBeFunction;
  //
  //         // execute callback in before
  //         task.before();
  //
  //         return setInterval(
  //           function() {
  //             // execute callback resolve
  //             return resolve(true);
  //           },
  //           num * milliseconds
  //         ); // ! setInterval()
  //       } else {
  //         // if (taskType === "function") {
  //         return setInterval(
  //           function() {
  //             return resolve(true);
  //           },
  //           num * milliseconds
  //         ); // ! setInterval()
  //       } // ! else
  //     } catch (e) {
  //       console.error(e);
  //       return;
  //     } // ! Exception
  //   });
  // }; // ! Every()

  // register methods
  var REGISTER = {
    After: After
    // Every: Every
  };

  return REGISTER;
};
