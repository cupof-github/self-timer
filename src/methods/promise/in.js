/**
 * [promise in ]
 */
SelfTimer.prototype. in = (function(condition) {

    var _Condition = condition;

    // private variables
    var _message = this.messages();
    var _helper = this.helpers();
    var _format = this.formats();

    var _current = this.D;
    var _date = this.D.getDate();
    var _month = this.D.getMonth() + 1;
    var _year = this.D.getFullYear();

    /**
     * @param {[ Integer ]} day [* less than 31]
     * @return {[ Resolve ]}
     */
    var Day = (function(day) {

        return new Promise(function(resolve, reject) {

            try {

                if (parseInt(day) > 31)
                    throw(__message.day)

                var num = (day < 10)
                    ? '0' + day
                    : day;

                return (day == _date)
                    ? resolve(true)
                    : (_Condition === true)
                        ? reject(false)
                        : false;

            } catch (e) {
                console.error(e);
                return;
            }

        }); // ! Promise()

    }); // ! Day()

    /**
     * [ in().Days description ]
     * @param  {[ Array ]} days [description]
     * @return {[ Resolve ]}      [description]
     */
    var Days = (function(days) {

        return new Promise(function(resolve, reject) {

            try {

                if (!Array.isArray(days))
                    throw(_message.isNotArray)

                var array = days.map(function(res) {
                    // convert elemetnts to Integer in array
                    return parseInt(res);
                });

                return (_helper.__contains(array, _date))
                    ? resolve(true)
                    : (_Condition === true)
                        ? reject(false)
                        : false;

            } catch (e) {
                console.error(e);
                return;
            }

        }); // ! Promise()

    }); // ! Days()

    /**
     * @param  {[ Integer ]} from
     * @param  {[ Integer ]} to
     * @return {[ Resolve ]}
     */
    var DaysBetween = (function(from, to) {

        return new Promise(function(resolve, reject) {

            try {

                var start = parseInt(from);
                var end = parseInt(to);

                if (start > 30)
                    throw(_message.startDay);
                
                if (end > 31)
                    throw(_message.endDay);
                
                var arr = _helper.__range(end, end - start);
                arr.push(from)

                return (_helper.__contains(arr, _date))
                    ? resolve(true)
                    : (_Condition === true)
                        ? reject(false)
                        : false;

            } catch (e) {
                console.error(e);
                return;
            }

        }); // ! Promise()

    }); // ! DaysBetween()

    /**
     * @param {[ Integer ]} month
     * @return {[ Resolve ]}
     */
    var Month = (function(month) {

        return new Promise(function(resolve, reject) {

            try {

                if (parseInt(month) > 12)
                    throw(_message.month);
                
                var num = (month < 10)
                    ? '0' + month
                    : month;

                return (num == _month)
                    ? resolve(true)
                    : (_Condition === true)
                        ? reject(false)
                        : false;

            } catch (e) {
                console.error(e);
                return;
            }

        }); // ! Promise()

    }); // ! Month()


    /**
     * [MonthSelects description]
     * @param  {[ Integer ]} months
     * @return {[ Resolve ]}
     */
    var MonthSelects = (function(months) {

        return new Promise(function(resolve, reject) {

            try {

                if (!Array.isArray(months))
                    throw(_message.isNotArray);
                
                return (_helper.__contains(months, _month))
                    ? resolve(true)
                    : (_Condition === true)
                        ? reject(false)
                        : false;

            } catch (e) {
                console.error(e);
                return;
            }

        }); // ! Promise()

    }); // ! MonthSelects

    /**
     * @param {[ Integer ]} year
     * @return {[ Function ]}
     */
    var Year = (function(year) {

        return new Promise(function(resolve, reject) {

            try {

                if (!(year.toString()).match(_format.year))
                    throw(_message.year);
                
                return (year == _year)
                    ? resolve(true)
                    : (_Condition === true)
                        ? reject(false)
                        : false;

            } catch (e) {
                console.error(e);
                return;
            }

        }); // ! Promise()

    }); // ! Year()

    // register methods
    var REGISTER = {
        "Day": Day,
        "Days": Days,
        "DaysBetween": DaysBetween,
        "Month": Month,
        "MonthSelects": MonthSelects,
        "Year": Year
    };

    return REGISTER;

});
