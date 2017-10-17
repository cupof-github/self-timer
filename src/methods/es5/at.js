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
  var _minute = this.D.getMinutes();
  var _msg = this.messages();
  var _h = this.helpers();
  var _fmt = this.formats();

  /**
   * [ at().Between description ]
   * @param  {[ String ]} from [ time format * hh:mm ]
   * @param  {[ String ]} to   [ time format * hh:mm ]
   * @param  {[ Function ]} task  [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Between = function(from, to, task) {
    if (_h.__checkIsValid(task)) {
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

        if (available) return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
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
    if (_h.__checkIsValid(task)) {
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

        if (!available) return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
  }; // ! Unless()

  var Min = function(minute, task) {
    if (_h.__checkIsValid(task)) {
      var time = parseInt(minute);

      try {
        if (time > 59) throw _msg.startMin;

        if (time === _minute) return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()

  } // ! Minute()

  var MinBetween = function(from, to, task) {
    if (_h.__checkIsValid(task)) {
      var start = parseInt(from);
      var end = parseInt(to);

      try {
        if (start > 59) throw _msg.startMin;

        if (end > 59) throw _msg.endMin;

        var arr = _h.__range(end, end - start);
        arr.push(from);

        if (_h.__contains(arr, _minute)) {
          return task !== undefined ? task() : true;
        } // ! if()
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
  }; // ! MinutesBetween()


  var MinSelects = function(minutes, task) {
    if (_h.__checkIsValid(task)) {
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
          if (res > 59) throw _msg.isNotValidMin;
        });

        if (_h.__contains(array, _minute)) {
          return task !== undefined ? task() : true;
        } // ! if
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
  }; // ! MinuteSelects()

  /**
   * [ at().Hour description]
   * @param  {[ Integer ]} hour [ 0 - 23 ]
   * @param  {[ Function ]} task [description]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Hour = function(hour, task) {
    if (_h.__checkIsValid(task)) {
      var time = parseInt(hour);

      try {
        if (time > 23) throw _msg.startHour;

        if (time === _hour) return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
  }; // ! Hour()

  /**
   * [ at().HoursBetween description ]
   * @param  {[ Integer ]} from [ Start hour 0 - 23 ]
   * @param  {[ Integer ]} to   [ End hour 0 - 23 ]
   * @param {[ Function ]} task
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var HoursBetween = function(from, to, task) {
    if (_h.__checkIsValid(task)) {
      var start = parseInt(from);
      var end = parseInt(to);

      try {
        if (start > 23) throw _msg.startHour;

        if (end > 23) throw _msg.endHour;

        var arr = _h.__range(end, end - start);
        arr.push(from);

        if (_h.__contains(arr, _hour)) {
          return task !== undefined ? task() : true;
        } // ! if()
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
  }; // ! HoursBetween()

  /**
   * [at().HourSelects]
   * @param  {[ array ]} hours [ 0 - 23 ]
   * @param  {[ Function ]} task [description]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var HourSelects = function(hours, task) {
    if (_h.__checkIsValid(task)) {
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

        if (_h.__contains(array, _hour)) {
          return task !== undefined ? task() : true;
        } // ! if
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
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
