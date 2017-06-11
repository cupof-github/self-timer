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
  }; // ! __checkIsValid()

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
   * [ check string if word is included ]
   * @param {[ String ]} word
   * @param {[ String ]} val
   * @return {[ Bool ]}
   */
  var __str_includes = function(word, val) {
    var result = false;

    if (word.indexOf(val) >= 0) result = true;

    return result;
  };

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
    var parts = d.split(/:|\s/),
      date = new Date();

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
   * @param {[ String ]} type
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
      ? navigator.userLanguage.toLowerCase()
      : navigator.language.toLowerCase();
  }; // ! __detectLang()

  /**
   * @return {[ Array ]}
   */
  var __arrayToLower = function(arr) {
    return arr.map(function(val) {
      return val.toLowerCase();
    });
  }; // ! __arrayToLower()

  var REGISTER = {
    __checkIsValid: __checkIsValid,
    __contains: __contains,
    __str_includes: __str_includes,
    __dayOfTheWeekStringToNumber: __dayOfTheWeekStringToNumber,
    __timeObject: __timeObject,
    __range: __range,
    __dateCompare: __dateCompare,
    __dateString: __dateString,
    __typeToMilliseconds: __typeToMilliseconds,
    __detectLang: __detectLang,
    __arrayToLower: __arrayToLower
  }; // ! REGISTER

  return REGISTER;
}; // ! SelfTimer.prototype.helpers
