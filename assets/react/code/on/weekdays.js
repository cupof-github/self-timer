import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class Weekdays extends React.Component {
    name() {
        return 'onWeekdays';
    }
    
    title() {
        return 'Weekdays( task )';
    }

    argument() {
        return 'task [ Function ] ';
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>Weekdays</code> method return callback, when <u><strong>weekdays</strong></u> ( Monday to Friday ). </span>);
    }

    code() {
        var code = `/* selftimer.js */
        
// initialize
var st = new SelfTimer(new Date());

// Weekdays() * run Monday to Friday
st.on().Weekdays(function() {
  // callback
  console.log("running on Monday to Friday!");
});

// non-callback
if( st.on().Weekdays() )
{
  // callback
  console.log("running on Monday to Friday!");
}
`

        return (
            <pre>
              <code className="language-javascript">{code}</code>
            </pre>
        );
    }
    
    code2(){
      var code = `/* selftimer-promise-plyfill.js || selftimer-promise.js */
      
// initialize
var st = new SelfTimer(new Date());

// Weekdays() * run Monday to Friday
st.on()
    .Weekdays()
      .then(function(){
        // callback
        console.log("running on Monday to Friday!");
      });

// use 'catch' case
st.on(true)
    .Weekdays()
      .then(function(){
        // callback
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
                <i className="fa fa-code"></i>&nbsp;
                {this.title()}
              </h2>

              <p className="post-subtitle">
                {this.description()}
              </p>
              <h5>group: </h5>
              <ul className="none">
                <li><code>.on()</code></li>
              </ul>
              <h5>argument :
              </h5>
              <ul className="none">
                <li>{this.argument()}</li>
              </ul>
              <h5>return :
              </h5>
              <ul className="none">
                <li>{this.return()}</li>
              </ul>
              <br/>

              <CodeTab
                id_1="onWeekdaysCallback"
                code_1={this.code()}
                id_2="onWeekdaysPromise"
                code_2={this.code2()}
              />

              <JumpList />
              <hr/>
            </div>
        );
    }
}

module.exports = Weekdays;
