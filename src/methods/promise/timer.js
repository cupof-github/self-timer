/**
 * Promise
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
   * @return {[ Resolve ]}
   */
  var After = function(type, num, task) {
    return new Promise(function(resolve) {
      var milliseconds = _h.__typeToMilliseconds(type);

      var taskType = typeof task;

      try {
        // checking type : second, minute .. and so
        if (!milliseconds) throw _msg.timeFormat;

        // check num
        if (isNaN(num)) throw _msg.numFormat;
        if (num === 0 || num === "0") throw _msg.numFormat;

        if (!_h.__contains(["object", "function", "undefined"], taskType))
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
  //     var milliseconds = _h.__typeToMilliseconds(type);
  //
  //     var taskType = typeof task;
  //
  //     try {
  //       // checking type : second, minute .. and so
  //       if (!milliseconds) throw _msg.timeFormat;
  //
  //       // check num
  //       if (isNaN(num)) throw _msg.numFormat;
  //       if (num === 0 || num === "0") throw _msg.numFormat;
  //
  //       if (!_h.__contains(["object", "function", "undefined"], taskType))
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

  var REGISTER = {
    After: After
    // Every: Every
  }; // REGISTER

  return REGISTER;
}; // ! SelfTimer.prototype.timer
