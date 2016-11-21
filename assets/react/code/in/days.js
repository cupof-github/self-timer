import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class InDays extends React.Component {
    name() {
        return 'inDays';
    }

    title() {
        return 'Days( days, task )';
    }

    argument() {
        return [
            'days [ Array ] * exp [1, 3, 7, 31]',
            'task [ Function ] '];
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>Days</code> method return callback, when you want to run <strong><u>multiple days </u></strong> you selected.　( * exp 3th, 7th, 14th ... etc in Month )  </span>);
    }

    code() {
        var code = `/* selftimer.js */

// initialize
var st = new SelfTimer(new Date());

// Days()
st.in().Days([3, 10, 13, 23], function() {
  // callback
  console.log("run on 3th, 10th, 13th, 23th in month");
});

// non-callback
if( st.in().Days([3, 10, 13, 23]) )
{
  // callback
  console.log("run on 3th, 10th, 13th, 23th in month");
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

// Days()
st.in()
    .Days([3, 10, 13, 23])
      .then(function() {
        // callback
        console.log("run on 3th, 10th, 13th, 23th in month");
      });

// use 'catch' method
st.in(true)
    .Days([3, 10, 13, 23])
      .then(function() {
          // callback
          console.log("run on 3th, 10th, 13th, 23th in month");
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
                id_1="inDaysCallback"
                code_1={this.code()}
                id_2="inDaysPromise"
                code_2={this.code2()}
              />

              <JumpList />
              <hr/>
            </div>
        );
    }
}

module.exports = InDays;
