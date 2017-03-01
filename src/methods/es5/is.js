/**
 * [isTrue description]
 * @type {Boolean}
 */
SelfTimer.prototype.is = (function() {

    /**
     * [ if condition is true, return callback ]
     * @param {[ Bool ]} condition
     * @param {[ Function ]} task
     * @return {[ Function ]}
     */
    var True = (function(condition, task) {

        if (condition)
            return task !== undefined ?
                task() :
                true;

    }); // ! True()

    /**
     * [ if condition is false, return callback ]
     * @param {[ Bool ]} condition
     * @param {[ Function ]} task
     * @return {[ Function ]}
     */
    var False = (function(condition, task) {

        if (!condition)
            return task !== undefined ?
                task() :
                true;
    }); // ! False()

    /**
     * [ if match browser language value, return callback ]
     * @param {[ String ]} lang
     * @param {[ Function ]} task
     * @return {[ Function ]}
     * @coderef https://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx
     */
    var Language = (function(lang, task) {

        var detect = navigator.userLanguage === 'undefined' ?
            navigator.userLanguage :
            navigator.language;

        if (lang == detect)
            return task !== undefined ?
                task() :
                true;

    }); // ! Language()

    /**
     * [ if match browser language value, return callback, but this one enable short value ]
     * @param {[ String ]} lang
     * @param {[ Function ]} task
     * @return {[ Function ]}
     */
    var Lang = (function(lang, task) {

        var detect = navigator.userLanguage === 'undefined' ?
            navigator.userLanguage :
            navigator.language;

        if (lang == detect.slice(0, 2))
            return task !== undefined ?
                task() :
                true;

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
