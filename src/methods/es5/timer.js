/**
 * ES5
 * [SelfTimer.prototype.timer ]
 * @return {[ Methods ]}
 */
SelfTimer.prototype.timer = function() {
  var _msg = this.messages();
  var _h = this.helpers();

  /**
   * [ timer().After ]
   * @param {[ String ]} type [min, sec ...]
   * @param {[ Integer || String of Number ]} num
   * @param {[ Function ]} task
   * @return {[ Function ]}
   */
  var After = function(type, num, task) {
    var milliseconds = _h.__typeToMilliseconds(type);

    var taskType = typeof task;

    try {
      // checking type : second, minute .. and so
      if (!milliseconds) throw _msg.timeFormat;

      // check num
      if (isNaN(num)) throw _msg.numFormat;
      if (num === 0 || num === "0") throw _msg.numFormat;

      if (!_h.__contains(["object", "function"], taskType))
        throw this.messages("type").taskFormat;

      if (taskType === "object") {
        // check exists keys
        if (!("before" in task)) throw this.messages("key:before").notExist;
        if (!("after" in task)) throw this.messages("key:after").notExist;

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
    var milliseconds = _h.__typeToMilliseconds(type);

    var taskType = typeof task;

    try {
      // checking type : second, minute .. and so
      if (!milliseconds) throw _msg.timeFormat;

      // check num
      if (isNaN(num)) throw _msg.numFormat;
      if (num === 0 || num === "0") throw _msg.numFormat;

      if (!_h.__contains(["object", "function"], taskType))
        throw this.messages("type").taskFormat;

      if (taskType === "object") {
        // check exists keys
        if (!("before" in task)) throw this.messages("key:before").notExist;
        if (!("after" in task)) throw this.messages("key:after").notExist;

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

  var REGISTER = {
    After: After,
    Every: Every
  }; // REGISTER

  return REGISTER;
}; // ! SelfTimer.prototype.timer
