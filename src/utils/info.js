/**
 * [info description]
 * @return {[ Object ]}
 */
SelfTimer.prototype.info = function() {
  return {
    version: "1.4.4",
    method: {
      on: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Weekdays",
        "Weekend",
        "Selects",
        "Annual",
        "DatesBetween",
        "DatesContain"
      ],
      at: ["Between", "Unless", "Hour", "HoursBetween", "HourSelects"],
      in: ["Day", "Days", "DaysBetween", "Month", "MonthSelects", "Year"],
      is: [
        "True",
        "False",
        "Language",
        "Lang",
        "LanguageSelects",
        "LangSelects",
        "LanguageExcepts",
        "LangExcepts"
      ],
      timer: ["After"]
    } // ! method
  }; // ! return
}; // ! SelfTimer.prototype.info
