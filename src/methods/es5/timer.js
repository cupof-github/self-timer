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
