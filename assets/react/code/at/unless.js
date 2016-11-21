import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTabPractical from '../../partials/codeTabPractical';

class AtUnless extends React.Component {
    name() {
        return 'atUnless';
    }
    
    title() {
        return 'Unless( from, to, task )';
    }

    argument() {
        return [
          'from [ String ] * hh:mm ( am || pm )',
          'to [ String ] * hh:mm ( am || pm )',
          'task [ Function ]'
        ];
    }


    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>Unless</code> method return callback, <u> exclude times from <strong>start</strong> to <strong>end</strong></u>.  </span>);
    }

    code() {
        var code = `/* selftimer.js */

// initialize
var st = new SelfTimer(new Date());

// Unless() usage
st.at().Unless('9:00 am', '5:30 pm', function() {
  console.log('this method run unless 9:00 am to 5:30 pm.');
});`

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

// Unless() usage
st.at()
    .Unless('9:00 am', '5:30 pm')
      .then(function() {
          // callback
          console.log('this method run unless 9:00 am to 5:30 pm.');
        });
      
// use 'catch' method
st.at(true)
    .Unless('9:00 am', '5:30 pm')
      .then(function() {
          // callback
          // this method run unless 9:00 am to 5:30 pm.
          console.log('we are closing.');
        })
      .catch(function(){
          // callback
          console.log('we are opening!')
      });
    `

        return (
            <pre>
              <code className="language-javascript">{code}</code>
            </pre>
        );
    }
    
    example() {
        var code = `/* selftimer.js */
        
// initialize
var st = new SelfTimer(new Date());
        
// this method run on Monday to Friday at 9 am to 5:30 pm.
st.on().Weekdays(function() {
  
  st.at().Unless('9:00 am', '5:30 pm', function() {
    // callback
    console.log('we are closing!');
  });
  
});`

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
                <li>{this.return()}</li>
              </ul>
              <br/>
              <CodeTabPractical
                id_1="atUnlessCallback"
                code_1={this.code()}
                id_2="atUnlessPromise"
                code_2={this.code2()}
                id_3="atUnlessPractical"
                code_3={this.example()}
              />

              <JumpList />

              <hr/>
            </div>
        );
    }
}

module.exports = AtUnless;
