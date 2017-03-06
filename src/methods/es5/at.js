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
