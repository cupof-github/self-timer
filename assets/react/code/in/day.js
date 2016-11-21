import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from '../../partials/codeTab';

class InDay extends React.Component {
    name() {
        return 'inDay';
    }

    title() {
        return 'Day( Day, task )';
    }

    argument() {
        return [
            'Day [ Integer ] * 1 - 31',
            'task [ Function ] '];
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>Day</code> method return callback, when you want to run <strong><u>day in month</u></strong></span>);
    }

    code() {
        var code = `/* selftimer.js */

// initialize
var st = new SelfTimer(new Date());

// Day() * run in 10th.
st.in().Day(10, function() {
  // callback
  console.log("run at 10th monthly !");
});

// non-callback
if( st.in().Day(10) )
{
  // callback
  console.log("run at 10th monthly !");
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

// Day() * run in 10th.
st.on()
    .Day(10)
      .then(function() {
        // callback
        console.log("run at 10th monthly !");
      });

// use 'catch' method
st.on(true)
    .Day(10)
      .then(function() {
          // callback
          console.log("run at 10th monthly !");
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
                id_1="inDayCallback"
                code_1={this.code()}
                id_2="inDayPromise"
                code_2={this.code2()}
              />

              <JumpList />
              <hr/>
            </div>
        );
    }
}

module.exports = InDay;
