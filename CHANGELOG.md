# self-timer.js Change log

## version 1.5.1 [ 2017/06/12 ]
fixed `is.Mobile` method

## version 1.5.0 [ 2017/06/11 ]
added `is.Mobile` method

## version 1.4.6 [ 2017/04/30 ]
cahange: no longer necessary initial argument should be `new Date()`
```javascript
// Before
var st = SelfTimer(new Date());
// After
var st = SelfTimer(); // set 'new Date()' automatically as default.
var st = SelfTimer(new Date()); // either OK !
```

## version 1.4.5 [ 2017/03/15 ]
fixed `timer().After` method at validation.

## version 1.4.4 [ 2017/03/13 ]
fixed `timer().After` method.

## version 1.4.2 [ 2017/03/12 ]
enhanced `is().Lang*` methods.

now you can use insensitive characters for detect browser-language, like `**en-us** or **en-US**`.

## version 1.4.1 [ 2017/03/12 ]
added `info()` method

## version 1.4.0
added some methods in `is()` group
** ES5 & Promise **
 - `is().LanguageSelects`
 - `is().LangSelects`
 - `is().LanguageExcepts`
 - `is().LangExcepts`

## version 1.3.0
added `timer().After` method

## version 1.2.0
added `at().HourSelects` method.

## version 1.1.0

added `on().DateContain` method.

## version 1.0.0

initial release !
