import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class InMonth extends React.Component {
    name() {
        return 'inMonth';
    }

    title() {
        return 'Month( month, task )';
    }

    argument() {
        return [
            'month [ Integer ] * 1 - 12',
            'task [ Function ] '];
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>Month</code> method return callback, when you want to run <strong><u>in Months </u></strong> ( * January to December ). </span>);
    }

    code() {
        var code = `/* selftimer.js */

// initialize
var st = new SelfTimer(new Date());

// Month() * run Month, WednesMonth, FriMonth.
st.in().Month(12, function() {
  // callback
  console.log("run during December!");
});

// non-callback
if( st.in().Month(12) )
{
  // callback
  console.log("run during December!");
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
        
// initialize
var st = new SelfTimer(new Date());

// Month()
st.in()
    .Month(12)
      .then(function() {
        // callback
        console.log("run during December!");
      });

// use 'catch' method
st.in(true)
    .Month(12)
      .then(function() {
        // callback
        console.log("run during December!");
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
                <li><code>.in()</code></li>
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
                id_1="inMonthCallback"
                code_1={this.code()}
                id_2="inMonthPromise"
                code_2={this.code2()}
              />

              <JumpList />

              <hr/>
            </div>
        );
    }
}

module.exports = InMonth;
