import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class InDaysBetween extends React.Component {
    name() {
        return 'inDaysBetween';
    }
    
    title() {
        return 'DaysBetween( from, to, task )';
    }

    argument() {
        return [
          'from [ Integer ] * up to 31',
          'to [ Integer ] * up to 31',
          'task [ Function ]'
        ];
    }


    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>DaysBetween</code> method return callback, between times <strong>start</strong> to <strong>end</strong>.  </span>);
    }

    code() {
        var code = `/* selftimer.js */

// initialize
var st = new SelfTimer(new Date());

// DaysBetween() usage
st.in().DaysBetween(10, 16, function() {
  // callback
  console.log('this method run between 10th to 16th in month !');
});

if( st.in().DaysBetween(10, 16) )
{
  // callback
  console.log('this method run between 10th to 16th in month !');
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

// DaysBetween() usage
st.in()
    .DaysBetween(10, 16)
      .then(function() {
        console.log('this method run between 10th to 16th in month !');
      });
    
// use 'catch' method
st.in(true)
    .DaysBetween(10, 16)
      .then(function() {
          console.log('this method run between 10th to 16th in month !');
        })
      .catch(funtion(){
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
                <li>{this.return()}</li>
              </ul>
              <br/>

              <CodeTab
                id_1="inDaysBetweenCallback"
                code_1={this.code()}
                id_2="inDaysBetweenPromise"
                code_2={this.code2()}
              />

              <JumpList />
              <hr/>
            </div>
        );
    }
}

module.exports = InDaysBetween;
