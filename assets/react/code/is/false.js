import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class IsFalse extends React.Component {
    name() {
        return 'isFalse';
    }

    title() {
        return 'False( condition, task )';
    }

    argument() {
        return [
            'condition [ Bool ]',
            'task [ Function ] '
          ];
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>False</code> method return callback, if condigion is <strong><u>false</u></strong></span>);
    }

    code() {
      var code = `/* selftimer.js */
      
// exp: check cookie exist with js-cookie
function checkExample(param) {
return Cookies.get(param) !== undefined
                      ? true
                      : false;
}
  
// initialize
var st = new SelfTimer(new Date());

// True() * run if false.
st.is().False(checkExample('yourParam'), function() {
// callback
// create cookie
Cookies.set('yourParam', 'someValue', { expires: 7 });
});

// non-callback
if( st.is().False(checkExample('yourParam')) )
{
// callback
// create cookie
Cookies.set('yourParam', 'someValue', { expires: 7 });
}
`

  return (
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
  );
}

code2() {
  var code = `/* selftimer-promise-plyfill.js || selftimer-promise.js */
  
// exp: check cookie exist with js-cookie
function checkExample(param) {
return Cookies.get(param) !== undefined
                      ? true
                      : false;
}

// initialize
var st = new SelfTimer(new Date());

// False() * run if condition is false
st.on()
    .False(checkExample('yourParam'))
      .then(function() {
        // callback
        Cookies.set('yourParam', 'someValue', { expires: 7 });
      });

// with 'catch' method
st.on(true)
    .False(checkExample('yourParam'))
      .then(function() {
        // callback
        Cookies.set('yourParam', 'someValue', { expires: 7 });
      })
      .catch(function(){
        // callback
      });
`

  return (
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
  );
}

    render() {
        return (
            <div className="post-preview">
              <h2 className="post-title" id={this.name()}>
                <i className="fa fa-code"></i>&nbsp; {this.title()}
              </h2>

              <p className="post-subtitle">
                {this.description()}
              </p>
              <h5>group:
              </h5>
              <ul className="none">
                <li><code>.is()</code></li>
              </ul>
              <h5>argument :
              </h5>
              <ul className="none">
                {this.argument().map((name, index) => {
                  return <li key={index}>{name}</li>
                })}
              </ul>
              <h5>return :
              </h5>
              <ul className="none">
                <li>{this.return ()}</li>
              </ul>
              <br/>

              <CodeTab
                id_1="isFalseCallback"
                code_1={this.code()}
                id_2="isFalsePromise"
                code_2={this.code2()}
              />

              <JumpList />

              <hr/>
            </div>
        );
    }
}

module.exports = IsFalse;
