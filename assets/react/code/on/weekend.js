import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class Weekend extends React.Component {
    name() {
        return 'onWeekend';
    }

    title() {
        return 'Weekend( task )';
    }

    argument() {
        return 'task [ Function ] ';
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (
            <span>
              <code>Weekend</code>&nbsp;
              method return callback, when&nbsp;
              <strong>
                <u>weekend</u>&nbsp;
                </strong>
                ( Sunday and Saturday ).</span>
        );
    }

    code() {
        var code = `/* selftimer.js */
        
// initialize
var st = new SelfTimer(new Date());

// Weekend() * run Sunday and Saturday
st.on().Weekend(function() {
  // callback
  console.log("do something on weekend!");
});

// non-callback
if( st.on().Weekend() )
{
  //callback
  console.log("do something on weekend!");
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

// Weekend() * run Sunday and Saturday
st.on()
    .Weekend()
      .then(function(){
        // callback
        console.log("do something on weekend!");
      });

// use 'catch' method
st.on(true)
    .Weekend()
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
                <i className="fa fa-code"></i>&nbsp; {this.title()}
              </h2>

              <p className="post-subtitle">
                {this.description()}
              </p>
              <h5>group:
              </h5>
              <ul className="none">
                <li>
                  <code>.on()</code>
                </li>
              </ul>
              <h5>argument :
              </h5>
              <ul className="none">
                <li>{this.argument()}</li>
              </ul>
              <h5>return :
              </h5>
              <ul className="none">
                <li>{this.return ()}</li>
              </ul>
              <br/>

              <CodeTab
                id_1="onWeekendCallback"
                code_1={this.code()}
                id_2="onWeekendPromise"
                code_2={this.code2()}
              />

              <JumpList />
                <hr/>
            </div>
        );
    }
}

module.exports = Weekend;
