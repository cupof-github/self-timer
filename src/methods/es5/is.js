/**
 * ES5
 * [isTrue description]
 * @type {Boolean}
 */
SelfTimer.prototype.is = function() {
  // private variables
  var _h = this.helpers();
  var _msg = this.messages();

  /**
   * [ if condition is true, return callback ]
   * @param {[ Bool ]} condition
   * @param {[ Function ]} task
   * @return {[ Function ]}
   */
  var True = function(condition, task) {
    if (condition) return task !== undefined ? task() : true;
  }; // ! True()

  /**
   * [ if condition is false, return callback ]
   * @param {[ Bool ]} condition
   * @param {[ Function ]} task
   * @return {[ Function ]}
   */
  var False = function(condition, task) {
    if (!condition) return task !== undefined ? task() : true;
  }; // ! False()

  /**
   * [ if match browser language value, return callback ]
   * @param {[ String ]} lang
   * @param {[ Function ]} task
   * @return {[ Function ]}
   * @coderef https://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx
   */
  var Language = function(lang, task) {
    try {
      if (window === "undefined") throw this.messages("Language").onlyBrowser;

      if (lang.toLowerCase() == _h.__detectLang())
        return task !== undefined ? task() : true;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! Language()

  /**
   * [ if match browser language value, return callback, but this one enable short value ]
   * @param {[ String ]} lang
   * @param {[ Function ]} task
   * @return {[ Function ]}
   */
  var Lang = function(lang, task) {
    try {
      if (window === "undefined") throw this.messages("Lang").onlyBrowser;

      var detect = _h.__detectLang();

      if (lang.toLowerCase() == detect.slice(0, 2))
        return task !== undefined ? task() : true;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! Lang()

  /**
   * @param {[ Array ]} languages
   * @param {[ Function ]} task
   * @return {{ Function }}
   */
  var LanguageSelects = function(languages, task) {
    try {
      if (window === "undefined")
        throw this.messages("LanguageSelects").onlyBrowser;

      if (!Array.isArray(languages)) throw _msg.isNotArray;

      if (_h.__contains(_h.__arrayToLower(languages), _h.__detectLang()))
        return task !== undefined ? task() : true;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! LanguageSelects()

  /**
   * @param {[ Array ]} lang
   * @param {[ Function ]} task
   * @return {[ Functin ]}
   */
  var LangSelects = function(lang, task) {
    try {
      if (window === "undefined")
        throw this.messages("LangSelects").onlyBrowser;

      if (!Array.isArray(lang)) throw _msg.isNotArray;

      var detect = _h.__detectLang();

      if (_h.__contains(_h.__arrayToLower(lang), detect.slice(0, 2)))
        return task !== undefined ? task() : true;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! LangSelects()

  /**
   * @param {[ Array ]} lang
   * @param {[ Function ]} task
   * @return {[ Functin ]}
   */
  var LanguageExcepts = function(languages, task) {
    try {
      if (window === "undefined")
        throw this.messages("LanguageExcepts").onlyBrowser;

      if (!Array.isArray(languages)) throw _msg.isNotArray;

      if (!_h.__contains(_h.__arrayToLower(languages), _h.__detectLang()))
        return task !== undefined ? task() : true;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! LanguageExcepts()

  /**
   * @param {[ Array ]} lang
   * @param {[ Function ]} task
   * @return {[ Functin ]}
   */
  var LangExcepts = function(lang, task) {
    try {
      if (window === "undefined")
        throw this.messages("LangExcepts").onlyBrowser;

      if (!Array.isArray(lang)) throw _msg.isNotArray;

      var detect = _h.__detectLang();

      if (!_h.__contains(_h.__arrayToLower(lang), detect.slice(0, 2)))
        return task !== undefined ? task() : true;
    } catch (e) {
      console.error(e);
      return;
    } // ! Exception
  }; // ! LangExcepts()

  var REGISTER = {
    True: True,
    False: False,
    Language: Language,
    Lang: Lang,
    LanguageSelects: LanguageSelects,
    LangSelects: LangSelects,
    LanguageExcepts: LanguageExcepts,
    LangExcepts: LangExcepts
  }; // REGISTER

  return REGISTER;
}; // ! SelfTimer.prototype.is()
