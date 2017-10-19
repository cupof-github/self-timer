/**
 * [on description]
 * @return {[ Methods ]}
 */
SelfTimer.prototype.on = function(condition) {
  var _Condition = condition;

  // Private Variables
  var _current = this.D;
  var _day = this.D.getDay();
  var _msg = this.messages();
  var _h = this.helpers();
  var _fmt = this.formats();

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
        if (!Array.isArray(daysOfTheWeek)) throw _msg.isNotArray;

        // convert Date to week-number
        var arr = _h.__dayOfTheWeekStringToNumber(daysOfTheWeek);

        return _h.__contains(arr, _day)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
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

      return _h.__contains(dayOfTheWeek, _day)
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

      return _h.__contains(dayOfTheWeek, _day)
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
        if (!date.match(_fmt.date)) throw _msg.date;

        return date == _h.__dateString()
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
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
        if (start > end) throw _msg.dateGrater;

        if (start == end) throw _msg.dateSameDay;

        return _h.__dateCompare(start, end, _current)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
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
        if (!Array.isArray(dates)) throw _msg.isNotArray;

        var tzoffset = new Date().getTimezoneOffset() * 60000;

        var localtime = new Date(Date.now() - tzoffset)
          .toISOString()
          .slice(0, 10);

        return _h.__contains(dates, localtime)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! DatesContain()

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
