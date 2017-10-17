# self-timer.js

<!-- > A light-weight callback runner library for javascript. DOCリンク -->

 ![logo](./assets/img/logo.png)

## Overview

The self-timer.js is a light-weight callback runner library for javascript .

[Documentation](https://cupof-github.github.io/doc-selftimer/#/)

The name of **self-timer.js** is originated from 'self-timer', which is a device on a camera. You may run your callback at the timing when you want to execute as if self-timer .

For instance, run some function if today is weekdays ( Monday to Friday ), **self-timer.js** is able to write simplify .

```javascript
var st = new SelfTimer(new Date());

st.on()
  .Weekdays(function() {
    // callback
    console.log("this method run on Monday to Friday!");

  });
```

If you using server-side template ( exp: nunjucks, EJS.. and so. ). You can easy to switch template seasonally with self-timer.js.

```html
{% if st.in().MonthSelects([3, 4, 5]) %}
<!-- spring  -->
<link rel="stylesheet" type="text/css" href="spring.css">

{% elif st.in().MonthSelects([6, 7, 8]) %}
<!-- summer -->
<link rel="stylesheet" type="text/css" href="summer.css">

...

{% endif %}
```

Another one, output **'hello world'** at 9 am to 5 pm, on Monday and Friday, between November to December. 2016.

```javascript
var st = new SelfTimer(new Date());

// Between Nov to Dec in 2016
st.in(true)
  .Year(2016)
  .MonthsSelects([11, 12], function() {
    // Monday and Friday
    st.on()
      .Selects(['Mon', 'Fri'], function() {
        // Between 9 am to 17 pm
        st.at()
          .HoursBetween(9, 17, function() {
            // callback
            console.log("hello world!");
          }); // ! at().HoursBetween()

      }); // ! on().Selects()

  }); // ! in().Year.MonthsBetween()
```

## Installing

Using npm:

```bash
npm install self-timer --save
```

Using yarn:

```bash
yarn add self-timer
```

Using CDN:
```html

<!-- callback  -->
<script src="https://unpkg.com/self-timer/dist/selftimer.min.js"></script>

<!-- promise  -->
<script src="https://unpkg.com/self-timer/dist/selftimer-promise.min.js"></script>

<!-- promise but including polyfill  -->
<script src="https://unpkg.com/self-timer/dist/selftimer-promise-polyfill.min.js"></script>
```

## Available Methods

**.on( )**

- Sunday(), Monday(), Tuesday(), Wednesday(), Thursday(), Friday() Saturday()
- Weekday(), Weekend(), Selects()
- Annual(), DatesBetween(), DatesContain()

**.at( )**

- Between(), Unless()
- Min(), MinBetween(), MinSelects()
- Hour(), HoursBetween(), HourSelects()

**.in( )**

( supported methods-chaining on **selftimer.js** )

- Day(), Days(), DaysBetween()
- Month(), MonthsBetween()
- Year()

**.is()**

- True(), False()
- Language(), Lang()
- LanguageSelects(), LangSelects()
- LanguageExcepts(), LangExcepts()
- Mobile

**.timer()**

- After()

**.check()** (* only available for callback )
- With()
- Done()

## Basic Usage

**self-timer.js** have 2 types and 3 diffrents of files. You may choose them in right scene.

- callback style [ selftimer.js ( .min.js ) ]
- promise style [ selftimer-promise.js ( .min.js ) ]
- promise style with Polyfill [ selftimer-promise-polyfill.js ( .min.js ) ]

_Note:_ selftimer-promise-polyfill is including **[taylorhakes/promise-polyfill](https://github.com/taylorhakes/promise-polyfill)**. very thanks!

### Callback

**Web-Browser**

```html
<!-- callback -->
<script src="./self-timer/dist/selftimer.min.js"></script>

<script>
var st = new SelfTimer(new Date());

// run on Weekend ( * Saturday and Sunday )
st.on()
  .Weekend(function(){
    alert("it's Weekend.");
  });
</script>
```

**ES6 style & CommonJS**

```javascript
/* callback */
import SelfTimer from 'self-timer';

/* CommonJS */
// const SelfTimer = require('self-timer');

const st = new SelfTimer(new Date());

st.on()
  .Sunday(() => {
    console.log('run on Sunday!');
  });
```

### Promise

**Web-Browser**

```html
<!-- Promise ( Browser ) -->
<script src="./self-timer/dist/selftimer-promise-polyfill.min.js"></script>
<!-- <script src="./self-timer/dist/selftimer-promise.min.js"></script> -->

<script>
var st = new SelfTimer(new Date());

// run on Weekend ( * Saturday and Sunday )
st.on()
  .Weekend()
    .then(function() {
      alert("it's Weekend.");
    });

// use 'catch' method
st.on(true)
  .Weekend()
    .then(function() {
        alert("it's weekend.")
    })
    .catch(function(){
        alert("it's not weekend!")
    });

</script>
```

**ES6 && CommonJS**

```javascript
/* Promise ( Babel OR Webpack ) */
import SelfTimer from 'self-timer/dist/selftimer-promise-polyfill.min';

/* CommonJS */
// const SelfTimer = require('self-timer/dist/selftimer-promise.min');

// if you use babel-polyfill
// import SelfTimer from 'self-timer/dist/selftimer-promise.min';

const st = new SelfTimer(new Date());

st.on()
  .Sunday()
    .then(() => {
      console.log('run on Sunday!');
    });

// use 'catch' method
st.on(true)
  .Sunday()
    .then(() => {
      console.log("run on Sunday!");
    })
    .catch(() => {
      console.log("run on if not Sunday!");
    })
```

## License

MIT
