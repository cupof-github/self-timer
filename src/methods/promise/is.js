/**
 * Promise
 * [is() promise]
 */
SelfTimer.prototype.is = function(condition) {
  var _Condition = condition;

  // private variables
  var _helper = this.helpers();
  var _message = this.messages();

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
     * - browser only! -
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
        if (window === "undefined") throw this.messages("Language").onlyBrowser;

        return lang == _helper.__detectLang()
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
        if (window === "undefined") throw this.messages("Language").onlyBrowser;

        var detect = _helper.__detectLang();

        return lang == detect.slice(0, 2)
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
        if (window === "undefined")
          throw this.messages("LanguageSelects").onlyBrowser;

        if (!Array.isArray(languages)) throw _message.isNotArray;

        return _helper.__contains(languages, _helper.__detectLang())
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
    try {
      if (window === "undefined")
        throw this.messages("LangSelects").onlyBrowser;

      if (!Array.isArray(lang)) throw _message.isNotArray;

      var detect = _helper.__detectLang();

      return _helper.__contains(lang, detect.slice(0, 2))
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! LangSelects()

  /**
   * - browser only! -
   * @param {[ Array ]} lang
   * @return {[ Resolve ]}
   */
  var LanguageExcepts = function(languages) {
    try {
      if (window === "undefined")
        throw this.messages("LanguageExcepts").onlyBrowser;

      if (!Array.isArray(languages)) throw _message.isNotArray;

      return !_helper.__contains(languages, _helper.__detectLang())
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! LanguageExcepts()

  /**
   * - browser only! -
   * @param {[ Array ]} lang
   * @return {[ Resolve ]}
   */
  var LangExcepts = function(lang) {
    try {
      if (window === "undefined")
        throw this.messages("LangExcepts").onlyBrowser;

      if (!Array.isArray(lang)) throw _message.isNotArray;

      var detect = _helper.__detectLang();

      return !_helper.__contains(lang, detect.slice(0, 2))
        ? resolve(true)
        : _Condition === true ? reject(false) : false;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! LangExcepts()

  // register methods
  var REGISTER = {
    True: True,
    False: False,
    Language: Language,
    Lang: Lang,
    LanguageSelects: LanguageSelects,
    LangSelects: LangSelects,
    LanguageExcepts: LanguageExcepts,
    LangExcepts: LangExcepts
  }; // ! REGISTER

  return REGISTER;
}; // ! SelfTimer.prototype.is()
