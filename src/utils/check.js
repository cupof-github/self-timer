/**
 * [ With description]
 * @param {[ Boolean ]} val
 */
SelfTimer.prototype.check = function() {
  // Private Variable
  var _Flag = true;

  /**
   * @param {[ Any ]} val [ true || empty]
   * @return this
   */
  var With = function(val) {
    if (val !== true) _Flag = false;

    return this;
  }; // ! With

  /**
   * @param {[ Function ]} task
   * @return {[ Function ]} || {[ Bool ]}
   */
  var Done = function(task) {
    var callback = typeof task;

    if (callback === "undefined") {
      return _Flag === true ? true : false;
    } else if (callback === "function") {
      return _Flag === true ? task() : false;
    } else {
      throw new Error("Done() of argument should be 'function' or 'empty' .");
    }
  }; // ! Done

  var REGISTER = {
    With: With,
    Done: Done
  }; // REGISTER

  return REGISTER;
};
