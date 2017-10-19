/**
 * [on description]
 * @return {[ Methods ]}
 */
SelfTimer.prototype.on = function() {
  // Private Variables
  var _current = this.D;
  var _day = this.D.getDay();
  var _msg = this.messages();
  var _h = this.helpers();
  var _fmt = this.formats();

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Sunday = function(task) {
    if (_h.__checkIsValid(task)) {
      if (_day === 0) return task !== undefined ? task() : true;
    } // ! if()
  }; // ! Sunday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Monday = function(task) {
    if (_h.__checkIsValid(task)) {
      if (_day === 1) return task !== undefined ? task() : true;
    } // ! if()
  }; // ! Monday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Tuesday = function(task) {
    if (_h.__checkIsValid(task)) {
      if (_day === 2) return task != undefined ? task() : true;
    } // ! if()
  }; // ! Tuesday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function ]} [ Your callback ]
   */
  var Wednesday = function(task) {
    if (_h.__checkIsValid(task)) {
      if (_day === 3) return task !== undefined ? task() : true;
    } // ! if()
  }; // ! Wednesday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Thursday = function(task) {
    if (_h.__checkIsValid(task)) {
      if (_day === 4) return task !== undefined ? task() : true;
    } // ! if()
  }; // ! Thursday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Friday = function(task) {
    if (_h.__checkIsValid(task)) {
      if (_day === 5) return task !== undefined ? task() : true;
    } // ! if()
  }; // ! Friday()

  /**
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Saturday = function(task) {
    if (_h.__checkIsValid(task)) {
      if (_day === 6) return task !== undefined ? task() : true;
    } // ! if()
  }; // ! Saturday()

  /**
   * @param {[ Array ]} weekOfDay
   *                   [ Sun, Mon, Tue, Wed, Thu, Fri, Sat]
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Selects = function(daysOfTheWeek, task) {
    if (_h.__checkIsValid(task)) {
      try {
        if (!Array.isArray(daysOfTheWeek)) throw _msg.isNotArray;

        // convert Date to week-number
        var arr = _h.__dayOfTheWeekStringToNumber(daysOfTheWeek);

        if (_h.__contains(arr, _day)) {
          return task !== undefined ? task() : true;
        } // ! if()
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
  }; // ! Selects()

  /**
   * [ This method is implement on Monday to Friday ]
   * @param {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Weekdays = function(task) {
    if (_h.__checkIsValid(task)) {
      // Monday to Friday
      var dayOfTheWeek = [1, 2, 3, 4, 5];

      if (_h.__contains(dayOfTheWeek, _day)) {
        return task !== undefined ? task() : true;
      } // ! if()
    } // ! if()
  }; // ! Weekdays()

  /**
   * [ This method is implement on Saturday and Sunday ]
   * @param  {[ Function ]} task [ callback ]
   * @return {[ Function || Bool ]}  [ callback || bool ]
   */
  var Weekend = function(task) {
    if (_h.__checkIsValid(task)) {
      // Sunday and Saturday
      var dayOfTheWeek = [0, 6];

      if (_h.__contains(dayOfTheWeek, _day)) {
        return task !== undefined ? task() : true;
      } // ! if()
    } // ! if()
  }; // ! Weekend()

  /**
   * @param {[ String ]} date [MM-dd]
   * @param {[ Function ]} task
   * @return {[ Function ]}
   */
  var Annual = function(date, task) {
    if (_h.__checkIsValid(task)) {
      try {
        if (!date.match(_fmt.date)) throw _msg.date;

        if (date == _h.__dateString())
          return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
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
    if (_h.__checkIsValid(task)) {
      var start = new Date(from);
      var end = new Date(to);

      try {
        if (start > end) throw _msg.dateGrater;

        if (start == end) throw _msg.dateSameDay;

        if (_h.__dateCompare(start, end, _current))
          return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
  }; // ! DatesBetween()

  /**
   * [ check if dates is contained ]
   * @param  {[ Array ]} dates [ * YYYY-MM-DD ]
   * @param  {[ Function ]} task [ callback ]
   * @return {[ Function ]}      [ callback ]
   */
  var DatesContain = function(dates, task) {
    if (_h.__checkIsValid(task)) {
      try {
        if (!Array.isArray(dates)) throw _msg.isNotArray;

        var tzoffset = new Date().getTimezoneOffset() * 60000;

        var localtime = new Date(Date.now() - tzoffset)
          .toISOString()
          .slice(0, 10);

        if (_h.__contains(dates, localtime))
          return task !== undefined ? task() : true;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    } // ! if()
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
  }; // REGISTER

  return REGISTER;
};
