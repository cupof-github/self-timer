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
   * @param {[ String ]} type
   * @param {[ Integer ]} num
   * @param {[ Function ]} task
   * @return {[ Function ]}
   */
  var After = function(type, num, task) {

  }; // ! After()

  var Every = function(type, num, task) {

  }; // ! Every()


  // register methods
  var REGISTER = {
    After: After,
    Every: Every

  };

  return REGISTER;
};
