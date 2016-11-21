import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class Annual extends React.Component {
    name() {
        return 'onAnnual';
    }

    title() {
        return 'Annual( date, task )';
    }

    argument() {
        return [
            'date [ String ] * MM-dd ',
            'task [ Function ] '];
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>Annual</code> method return callback when you want to run <strong><u>months of days</u></strong></span>);
    }

    code() {
        var code = `/* selftimer.js */
        
// initialize
var st = new SelfTimer(new Date());

// Annual() * Nov 2.
st.on().Annual('11-2', function() {
  // callback
  console.log("do something on Nov 2!");
});

// non-callback
if( st.on().Annual('12-25') )
{
  // callback
  console.log("do somting on December 25!");
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

// Annual() * Nov 2.
st.on()
    .Annual('11-2')
      .then(function(){
        // callback
        console.log("run on Nov 2!");
      });

// use 'catch' method
st.on(true)
    .Annual('11-2')
      .then(function(){
        // callback
          console.log("run on Nov 2!");
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
                <li><code>.on()</code></li>
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
                id_1="onAnnualCallback"
                code_1={this.code()}
                id_2="onAnnualPromise"
                code_2={this.code2()}
              />
              <JumpList />
              <hr/>
            </div>
        );
    }
}

module.exports = Annual;
