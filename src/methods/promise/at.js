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
  var _minute = this.D.getMinutes();
  var _hour = this.D.getHours();
  var _msg = this.messages();
  var _h = this.helpers();
  var _fmt = this.formats();

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
        if (!from.match(_fmt.time)) throw _msg.time + "at start";

        // check time format for end time
        if (!to.match(_fmt.time)) throw _msg.time + " at end";

        // check if current time is available
        var available = _Current < _h.__timeObject(to) &&
          _Current > _h.__timeObject(from)
          ? true
          : false;

        return available
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
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
        if (!from.match(_fmt.time)) throw _msg.time + "at start";

        // check time format for end time
        if (!to.match(_fmt.time)) throw _msg.time + " at end";

        // check if current time is available
        var available = _Current < _h.__timeObject(to) &&
          _Current > _h.__timeObject(from)
          ? true
          : false;

        return available
          ? _Condition === true ? reject(false) : false
          : resolve(true);
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! Unless()

  var Min = function(minute) {
    return new Promise(function(resolve, reject) {
      var time = parseInt(minute);

      try {
        if (time > 59) throw _msg.startMin;

        return time === _minute
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! Hour()

  /**
   * [ at().HoursBetween description ]
   * @param  {[ Integer ]} from [ Start hour 0-23 ]
   * @param  {[ Integer ]} to   [ End hour 0 - 23 ]
   * @return {[ Resolve ]}
   */
  var MinBetween = function(from, to) {
    return new Promise(function(resolve, reject) {
      var start = parseInt(from);
      var end = parseInt(to);

      try {
        if (start > 59) throw _msg.startMin;

        if (end > 59) throw _msg.endMin;

        var arr = _h.__range(end, end - start);
        arr.push(from);

        return _h.__contains(arr, _minute)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! HoursBetween()


  var MinSelects = function(minutes, task) {
    return new Promise(function(resolve, reject) {
      try {
        if (!Array.isArray(minutes)) throw _msg.isNotArray;
        // check array elements if numberic
        if (!minutes.some(isNaN) != true) throw _msg.minFormat;

        var array = minutes.map(function(res) {
          // convert elemetnts to Integer in array
          return parseInt(res);
        });

        array.map(function(res) {
          // check elements if valid minute format
          if (res > 59) throw _msg.isNotValidHour;
        });

        return _h.__contains(array, _minute)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! HourSelects()


  /**
   * [ at().Hour description]
   * @param  {[ Integer ]} hour [ 0 - 23 ]
   * @return {[ Resolve ]}
   */
  var Hour = function(hour) {
    return new Promise(function(resolve, reject) {
      var time = parseInt(hour);

      try {
        if (time > 23) throw _msg.startHour;

        return time === _hour
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! Hour()

  /**
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
        if (start > 23) throw _msg.startHour;

        if (end > 23) throw _msg.endHour;

        var arr = _h.__range(end, end - start);
        arr.push(from);

        return _h.__contains(arr, _hour)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
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
        if (!Array.isArray(hours)) throw _msg.isNotArray;
        // check array elements if numberic
        if (!hours.some(isNaN) != true) throw _msg.hourFormat;

        var array = hours.map(function(res) {
          // convert elemetnts to Integer in array
          return parseInt(res);
        });

        array.map(function(res) {
          // check elements if valid hour format
          if (res > 23) throw _msg.isNotValidHour;
        });

        return _h.__contains(array, _hour)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! HourSelects()

  var REGISTER = {
    Between: Between,
    Unless: Unless,
    Min: Min,
    MinBetween: MinBetween,
    MinSelects: MinSelects,
    Hour: Hour,
    HoursBetween: HoursBetween,
    HourSelects: HourSelects
  }; // ! REGISTER

  return REGISTER;
};
