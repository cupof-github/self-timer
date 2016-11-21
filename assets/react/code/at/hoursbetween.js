import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTabPractical from '../../partials/codeTabPractical';

class AtHoursBetween extends React.Component {
    name() {
        return 'atHoursBetween';
    }
    
    title() {
        return 'HoursBetween( from, to, task )';
    }

    argument() {
        return [
          'from [ Integer ]',
          'to [ Integer ]',
          'task [ Function ]'
        ];
    }


    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>HoursBetween</code> method return callback, <u>between hour of times <strong>start</strong> to <strong>end</strong></u>.  </span>);
    }

    code() {
        var code = `/* selftimer.js */

// initialize
var st = new SelfTimer(new Date());

// this method run 1 pm to 3 pm
st.at().HoursBetween(13, 15, function() {
  // callback
  console.log('we are temporaly closing!');
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

// this method run 1 pm to 3 pm
st.at()
    .HoursBetween(13, 15);
      .then(function() {
        // callback
        console.log('we are temporaly closing!');
      });
    
// use 'catch' method
st.at(true)
    .HoursBetween(13, 15);
      .then(function() {
          // callback
          console.log('we are temporaly closing!');
        })
      .catch(function(){
        // callback
      });`

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
  // this method run 1 pm to 3 pm
  st.at().HoursBetween(13, 15, function() {
    // callback
    console.log('we are temporaly closing!');
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
                id_1="atHoursBetweenCallback"
                code_1={this.code()}
                id_2="atHoursBetweenPromise"
                code_2={this.code2()}
                id_3="atHoursBetweenPractical"
                code_3={this.example()}
              />

              <JumpList />

              <hr/>
            </div>
        );
    }
}

module.exports = AtHoursBetween;
