/**
 * [at as Promise]
 * @type {[type]}
 */
SelfTimer.prototype.at = (function(condition) {

    var _Condition = condition;

    /**
   * private variables
   */
    var _Current = this.D;
    var _day = this.D.getDay();
    var _hour = this.D.getHours();
    var _message = this.messages();
    var _helper = this.helpers();
    var _format = this.formats();

    /**
     * [ at().Between description ]
     * @param  {[ String ]} from [ time format * hh:mm ]
     * @param  {[ String ]} to   [ time format * hh:mm ]
     * @return {[ Resolve }
     */
    var Between = (function(from, to) {

        return new Promise(function(resolve, reject) {

            try {
                // check time format for start time
                if (!from.match(_format.time))
                    throw(_message.time + 'at start');
                
                // check time format for end time
                if (!to.match(_format.time))
                    throw(_message.time + ' at end');
                
                // check if current time is available
                var available = _Current < _helper.__timeObject(to) && _Current > _helper.__timeObject(from)
                    ? true
                    : false;

                return available
                    ? resolve(true)
                    : (_Condition === true)
                        ? reject(false)
                        : false;

            } catch (e) {
                console.error(e);
                return;
            }

        }); // ! Promise()

    }); // ! Between()

    /**
     * [ at().Unless description]
     * @param {[ String ]} from [ time format * hh:mm ]
     * @param {[ String ]} to [ time format * hh:mm ]
     * @return {[ Resolve ]}
     */
    var Unless = (function(from, to) {

        return new Promise(function(resolve, reject) {

            try {
                // check time format for start time
                if (!from.match(_format.time))
                    throw(_message.time + 'at start');
                
                // check time format for end time
                if (!to.match(_format.time))
                    throw(_message.time + ' at end');
                
                // check if current time is available
                var available = _Current < _helper.__timeObject(to) && _Current > _helper.__timeObject(from)
                    ? true
                    : false;

                return available
                    ? (_Condition === true)
                        ? reject(false)
                        : false
                    : resolve(true);

            } catch (e) {
                console.error(e);
                return;
            }

        }); // ! Promise()

    }); // ! Unless()

    /**
     * [ at().Hour description]
     * @param  {[ Integer ]} hour [ 0 - 23 ]
     * @return {[ Resolve ]}
     */
    var Hour = (function(hour) {

        return new Promise(function(resolve, reject) {

            var time = parseInt(hour);

            try {

                if (time > 23)
                    throw(_message.startHour);
                
                return time === _hour
                    ? resolve(true)
                    : (_Condition === true)
                        ? reject(false)
                        : false;

            } catch (e) {
                console.error(e);
                return;
            }

        }); // ! Promise()

    }); // ! Hour()

    /**
     * PASS!
     * [ time().HoursBetween description ]
     * @param  {[ Integer ]} from [ Start hour 0-23 ]
     * @param  {[ Integer ]} to   [ End hour 0 - 23 ]
     * @return {[ Resolve ]}
     */
    var HoursBetween = (function(from, to) {

        return new Promise(function(resolve, reject) {

            var start = parseInt(from);
            var end = parseInt(to);

            try {

                if (start > 23)
                    throw(_message.startHour);
                
                if (end > 23)
                    throw(_message.endHour);
                
                var arr = _helper.__range(end, end - start);
                arr.push(from)

                return (_helper.__contains(arr, _hour))
                    ? resolve(true)
                    : (_Condition === true)
                        ? reject(false)
                        : false;

            } catch (e) {
                console.error(e);
                return;
            }

        }); // ! Promise()

    }); // ! HoursBetween()

    // Register methods
    var REGISTER = {
        "Between": Between,
        "Unless": Unless,
        "Hour": Hour,
        "HoursBetween": HoursBetween
    };

    return REGISTER;
});
