"use strict";

/**
 * [SelfTimer description]
 * @param {[type]} date [description]
 */
function SelfTimer(date) {
  // this.D = date;
  if (typeof date === "undefined") {
    this.D = new Date();
  } else if (date instanceof Date === false) {
    console.error("'date' must be Date type.");
    return;
  } else {
    this.D = date;
  }
}
