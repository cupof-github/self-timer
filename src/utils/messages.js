SelfTimer.prototype.messages = function(val) {
  return {
    day: "Error: A day should be less than 31",
    month: "Error: month should be untll 12",
    date: "Error: date format shoud be MM-DD",
    year: "Error: date format shoud be 20YY",
    monthBetween: "Error: start of month should be less than end of month",
    startMin: "Error: start minute should be less than 59",
    endMin: "Error: end minute should be until 59",
    minFormat: "Error: minutes should be numberic",
    isNotValidMin: "Error: minute should be until 59",
    startHour: "Error: start hour should be less than 23",
    endHour: "Error: end hour should be until 23",
    hourFormat: "Error: hours should be numberic",
    isNotValidHour: "Error: hour should be until 23",
    startDay: "Error: start day should be less than 30",
    endDay: "Error: end day should be untill 31",
    time: "Error: invalid time format. time should be [hh:mm AM or PM]",
    isNotArray: "Error: first argument shold be Array",
    dateGrater: "start date should not be grater than end-of -date",
    dateSameDay: "start and end date are should not be same date ",
    timeFormat: "Error: time of type formats",
    numFormat: "Error: num should be numberic",
    taskFormat: "Error: " + val + " should be object or function",
    notExist: "Error: " + val + " not exist",
    shouldBeFunction: "Error: " + val + " is shold be function",
    onlyBrowser: "Error: " + val + " is just supported web-browser"
  }; // ! return
}; // ! SelfTimer.prototype.messages
