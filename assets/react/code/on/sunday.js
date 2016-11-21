import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class Sunday extends React.Component {

    constructor() {
        super();
    }
    name() {
        return 'onSunday';
    }

    title() {
        return 'Sunday( task ) ... Saturday( task )';
    }

    argument() {
        return 'task [ Function ] ';
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (
            <span>This &nbsp;
                <strong>methods</strong>&nbsp; are return callback, when you want to run on
                <strong>&nbsp;
                    <u>days of the week</u>
                </strong>.&nbsp; ( * Sunday to Saturday )</span>
        );
    }

    code() {
        var code = `/* selftimer.js */
        
// initialize
var st = new SelfTimer(new Date());

/* -- Available methods --
  Sunday(), Monday(), Tuesday(), Wednesday(),
  Thursday(), Friday(), Saturday()
*/
        
// Sunday()
st.on().Sunday(function() {
  // callback
  console.log("this run when Sunday!")
});

....

// with non-callbak
if( st.on().Tuesday() ) {
  // callback
  console.log("this run when Tuesday");
}

if( ! st.on().Tuesday() ) {
  // callback
  console.log("this run when not on Tuesday");
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
var st = new selfTimer(new Date());

/* -- Available methods --
  Sunday(), Monday(), Tuesday(), Wednesday(),
  Thursday(), Friday(), Saturday()
*/
      
// Sunday()
st.on()
    .Sunday()
      .then(function(){
        // callback
      });

// use 'catch' method
st.on(true)
    .Friday()
      .then(function(){
          // calback
        })
      .catch(function(){
          // this run when not on Friday
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
                id_1="onSundayCallback"
                code_1={this.code()}
                id_2="onSundayPromise"
                code_2={this.code2()}
              />

              <JumpList/>

                <hr/>
            </div>
        );
    }
}

module.exports = Sunday;
