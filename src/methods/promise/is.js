/**
 * Promise
 * [is() promise]
 */
SelfTimer.prototype.is = function(condition) {
  var _Condition = condition;

  // private variables
  var _h = this.helpers();
  var _msg = this.messages();

  /**
   * [ if status is true, return callback ]
   * @param {[ Bool ]} status
   * @param {[ Bool ]} condition
   * @return {[ Resolve ]}
   */
  var True = function(status) {
    return new Promise(function(resolve, reject) {
      return status
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    }); // ! Promise()
  }; // ! True()

  /**
   * [ if status is false, return callback ]
   * @param {[ Bool ]} status
   * @param {[ Bool ]} condition
   * @return {[ Resolve ]}
   */
  var False = function(status) {
    return new Promise(function(resolve, reject) {
      return status
        ? _Condition === true ? reject(false) : false
        : resolve(true);
    }); // ! Promise()
  }; // ! False()

  /**
   * - browser only! -
   * [ if mutch browser language value, return callback ]
   * @param {[ String ]} lang
   * @param {[ Bool ]} condition
   * @return {[ Resolve ]}
   * @coderef https://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx
   */
  var Language = function(lang) {
    return new Promise(function(resolve, reject) {
      try {
        if (typeof window === "undefined")
          throw this.messages("Language").onlyBrowser;

        return lang.toLowerCase() == _h.__detectLang()
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Promise()
  }; // ! Language()

  /**
   * [ if match browser language value, return callback, but this one enable short value ]
   * @param {[ String ]} lang
   * @param {[ Bool ]} condition
   * @return {[ Function ]}
   */
  var Lang = function(lang) {
    return new Promise(function(resolve, reject) {
      try {
        if (typeof window === "undefined")
          throw this.messages("Language").onlyBrowser;

        var detect = _h.__detectLang();

        return lang.toLowerCase() == detect.slice(0, 2)
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Proimse
  }; // ! Lang()

  /**
   * - browser only! -
   * @param {[ Array ]} languages
   * @return {[ Resolve ]}
   */
  var LanguageSelects = function(languages) {
    return new Promise(function(resolve, reject) {
      try {
        if (typeof window === "undefined")
          throw this.messages("LanguageSelects").onlyBrowser;

        if (!Array.isArray(languages)) throw _msg.isNotArray;

        return _h.__contains(_h.__arrayToLower(languages), _h.__detectLang())
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Proimse
  }; // ! LanguageSelects()

  /**
   * - browser only! -
   * @param {[ Array ]} lang
   * @return {[ Resolve ]}
   */
  var LangSelects = function(lang) {
    return new Promise(function(resolve, reject) {
      try {
        if (typeof window === "undefined")
          throw this.messages("LangSelects").onlyBrowser;

        if (!Array.isArray(lang)) throw _msg.isNotArray;

        var detect = _h.__detectLang();

        return _h.__contains(_h.__arrayToLower(lang), detect.slice(0, 2))
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Proimse
  }; // ! LangSelects()

  /**
   * - browser only! -
   * @param {[ Array ]} lang
   * @return {[ Resolve ]}
   */
  var LanguageExcepts = function(languages) {
    return new Promise(function(resolve, reject) {
      try {
        if (typeof window === "undefined")
          throw this.messages("LanguageExcepts").onlyBrowser;

        if (!Array.isArray(languages)) throw _msg.isNotArray;

        return !_h.__contains(_h.__arrayToLower(languages), _h.__detectLang())
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Proimse
  }; // ! LanguageExcepts()

  /**
   * - browser only! -
   * @param {[ Array ]} lang
   * @return {[ Resolve ]}
   */
  var LangExcepts = function(lang) {
    return new Promise(function(resolve, reject) {
      try {
        if (typeof window === "undefined")
          throw this.messages("LangExcepts").onlyBrowser;

        if (!Array.isArray(lang)) throw _msg.isNotArray;

        var detect = _h.__detectLang();

        return !_h.__contains(_h.__arrayToLower(lang), detect.slice(0, 2))
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Proimse
  }; // ! LangExcepts()

  /**
   * - borwser only! -
   * @return {[ Resolve ]}
   */
  var Mobile = function() {
    return new Promise(function(resolve, reject) {
      try {
        if (typeof window === "undefined")
          throw this.messages("Mobile").onlyBrowser;

        var agent = navigator.userAgent;

        var mobile = ["Windows Phone", "iPad", "iPhone", "iPod", "Android"];

        var arr = [];

        for (var i = 0; i < mobile.length; i++) {
          arr.push(_h.__str_includes(agent, mobile[i]));
        } // ! for

        return arr.indexOf(true) != -1
          ? resolve(true)
          : _Condition === true ? reject(false) : false;
      } catch (e) {
        console.error(e);
        return;
      } // ! Exception
    }); // ! Proimse
  }; // ! Mobile()

  var REGISTER = {
    True: True,
    False: False,
    Language: Language,
    Lang: Lang,
    LanguageSelects: LanguageSelects,
    LangSelects: LangSelects,
    LanguageExcepts: LanguageExcepts,
    LangExcepts: LangExcepts,
    Mobile: Mobile
  }; // ! REGISTER

  return REGISTER;
}; // ! SelfTimer.prototype.is()
