/**
 * [on description]
 * @return {[ Methods ]}
 */
SelfTimer.prototype.on = (function() {

    // Private Variables
    var _current = this.D;
    var _day = this.D.getDay();
    var _message = this.messages();
    var _helper = this.helpers();
    var _format = this.formats();

    /**
     * @param {[ Function ]} task [ callback ]
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
    var Sunday = (function(task) {

        if (_helper.__checkIsValid(task)) {

            if (_day === 0)
                return task !== undefined
                    ? task()
                    : true;

            }
        
    });

    /**
     * @param {[ Function ]} task [ callback ]
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
    var Monday = (function(task) {

        if (_helper.__checkIsValid(task)) {

            if (_day === 1)
                return task !== undefined
                    ? task()
                    : true;
            }
        
    });

    /**
     * @param {[ Function ]} task [ callback ]
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
    var Tuesday = (function(task) {

        if (_helper.__checkIsValid(task)) {

            if (_day === 2)
                return task != undefined
                    ? task()
                    : true;
            }
        
    });

    /**
     * @param {[ Function ]} task [ callback ]
     * @return {[ Function ]} [ Your callback ]
     */
    var Wednesday = (function(task) {

        if (_helper.__checkIsValid(task)) {

            if (_day === 3)
                return task !== undefined
                    ? task()
                    : true;
            }
        
    });

    /**
     * @param {[ Function ]} task [ callback ]
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
    var Thursday = (function(task) {

        if (_helper.__checkIsValid(task)) {

            if (_day === 4)
                return task !== undefined
                    ? task()
                    : true;
            }
        
    });

    /**
     * @param {[ Function ]} task [ callback ]
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
    var Friday = (function(task) {

        if (_helper.__checkIsValid(task)) {

            if (_day === 5)
                return task !== undefined
                    ? task()
                    : true;
            }
        
    });

    /**
     * @param {[ Function ]} task [ callback ]
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
    var Saturday = (function(task) {

        if (_helper.__checkIsValid(task)) {

            if (_day === 6)
                return task !== undefined
                    ? task()
                    : true;
            }
        
    });

    /**
     * @param {[ Array ]} weekOfDay
     *                   [ Sun, Mon, Tue, Wed, Thu, Fri, Sat]
     * @param {[ Function ]} task [ callback ]
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
    var Selects = (function(daysOfTheWeek, task) {

        if (_helper.__checkIsValid(task)) {

            try {

                if (!Array.isArray(daysOfTheWeek))
                    throw(_message.isNotArray);

                    // convert Date to week-number
                var arr = _helper.__dayOfTheWeekStringToNumber(daysOfTheWeek);

                if (_helper.__contains(arr, _day)) {
                    return task !== undefined
                        ? task()
                        : true;
                } // ! if()

            } catch (e) {
                console.error(e);
                return;
            }

        } // ! if()

    });

    /**
     * [ This method is implement on Monday to Friday ]
     * @param {[ Function ]} task [ callback ]
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
    var Weekdays = (function(task) {

        if (_helper.__checkIsValid(task)) {

            // Monday to Friday
            var dayOfTheWeek = [1, 2, 3, 4, 5];

            if (_helper.__contains(dayOfTheWeek, _day)) {
                return task !== undefined
                    ? task()
                    : true;
            }
        }

    });

    /**
     * [ This method is implement on Saturday and Sunday ]
     * @param  {[ Function ]} task [ callback ]
     * @return {[ Function || Bool ]}  [ callback || bool ]
     */
    var Weekend = (function(task) {

        if (_helper.__checkIsValid(task)) {

            // Sunday and Saturday
            var dayOfTheWeek = [0, 6];

            if (_helper.__contains(dayOfTheWeek, _day)) {
                return task !== undefined
                    ? task()
                    : true;
            }

        } // ! if

    });

    /**
     * @param {[ String ]} date [MM-dd]
     * @param {[ Function ]} task
     * @return {[ Function ]}
     */
    var Annual = (function(date, task) {

        if (_helper.__checkIsValid(task)) {

            try {

                if (!date.match(_format.date))
                    throw(_message.date);
                
                if (date == _helper.__dateString())
                    return task !== undefined
                        ? task()
                        : true;

                }
            catch (e) {
                console.error(e);
                return;
            }

        } // ! if()

    });

    /**
     * PASS
     * [dateBetween description]
     * @param  {[ String ]} from [ * YYYY-MM-DD ]
     * @param  {[ String]} to   [ * YYYY-MM-DD ]
     * @param  {[ Function ]} task [ callback ]
     * @return {[ Function ]}      [ callback ]
     */
    var DatesBetween = (function(from, to, task) {

        if (_helper.__checkIsValid(task)) {

            var start = new Date(from);
            var end = new Date(to);

            try {

                if (start > end)
                    throw(_message.dateGrater);
                
                if (start == end)
                    throw(_message.dateSameDay)

                if (_helper.__dateCompare(start, end, _current))
                    return task !== undefined
                        ? task()
                        : true;

                }
            catch (e) {
                console.error(e);
                return;
            }

        } // ! if()

    });

    // Register methods
    var REGISTER = {
        "Sunday": Sunday,
        "Monday": Monday,
        "Tuesday": Tuesday,
        "Wednesday": Wednesday,
        "Thursday": Thursday,
        "Friday": Friday,
        "Saturday": Saturday,
        "Selects": Selects,
        "Weekdays": Weekdays,
        "Weekend": Weekend,
        "Annual": Annual,
        "DatesBetween": DatesBetween

    };

    return REGISTER;
});
