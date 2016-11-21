import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from '../../partials/codeTab';

class Hour extends React.Component {
    name() {
        return 'atHour';
    }

    title() {
        return 'Hour( hour, task )';
    }

    argument() {
        return [
            'hour [ Integer ] * 0 - 23',
            'task [ Function ] '];
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>Hour</code> method return callback, when you want to run <strong><u>hour of time</u></strong> </span>);
    }

    code() {
        var code = `/* selftimer.js */
        
// initialize
var st = new SelfTimer(new Date());

// Hour().
st.at().Hour(20, function() {
  // callback
  console.log("do something at 8 pm!");
});

// non-callback
if( st.at().Hour(8) )
{
  // callback
  console.log("run at 8 am!");
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

// Hour().
st.at()
    .Hour(20)
      .then(function() {
        // callback
        console.log("do something at 8 pm!");
      });

// use 'catch' method
st.at(true)
    .Hour(20)
      .then(function() {
          // callback
          console.log("run at 8 pm!");
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
                <li><code>.at()</code></li>
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
                id_1="atHourCallback"
                code_1={this.code()}
                id_2="atHourPromise"
                code_2={this.code2()}
              />

              <JumpList />

              <hr/>
            </div>
        );
    }
}

module.exports = Hour;
