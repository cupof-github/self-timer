/**
 * [is() promise]
 */
SelfTimer.prototype.is = (function(condition) {

    var _Condition = condition;

    /**
     * [ if status is true, return callback ]
     * @param {[ Bool ]} status
     * @param {[ Bool ]} condition
     * @return {[ Resolve ]}
     */
    var True = (function(status) {

        return new Promise(function(resolve, reject) {

            return status
                ? resolve(true)
                : (_Condition === true)
                    ? reject(false)
                    : false;

        }); // ! Promise()

    }); // ! True()

    /**
     * - browser only! -
     * [ if status is false, return callback ]
     * @param {[ Bool ]} status
     * @param {[ Bool ]} condition
     * @return {[ Resolve ]}
     */
    var False = (function(status) {

        return new Promise(function(resolve, reject) {

            return status
                ? (_Condition === true)
                    ? reject(false)
                    : false
                : resolve(true);

        }); // ! Promise()

    }); // ! False()

    /**
     * - browser only! -
     * [ if mutch browser language value, return callback ]
     * @param {[ String ]} lang
     * @param {[ Bool ]} condition
     * @return {[ Resolve ]}
     * @coderef https://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx
     */
    var Language = (function(lang) {

        return new Promise(function(resolve, reject) {

            var detect = navigator.userLanguage === 'undefined'
                ? navigator.userLanguage
                : navigator.language;

            return (lang == detect)
                ? resolve(true)
                : (_Condition === true)
                    ? reject(false)
                    : false;

        }); // ! Promise()

    }); // ! Language()

    /**
    * [ if match browser language value, return callback, but this one enable short value ]
    * @param {[ String ]} lang
    * @param {[ Bool ]} condition
    * @return {[ Function ]}
     */
    var Lang = (function(lang) {

        return new Promise(function(resolve, reject) {

            var detect = navigator.userLanguage === 'undefined'
                ? navigator.userLanguage
                : navigator.language;

            return (lang == detect.slice(0, 2))
                ? resolve(true)
                : (_Condition === true)
                    ? reject(false)
                    : false;

        }); // ! Proimse

    }); // ! Lang()

    // register methods
    var REGISTER = {
        "True": True,
        "False": False,
        "Language": Language,
        "Lang": Lang
    };

    return REGISTER;

});
