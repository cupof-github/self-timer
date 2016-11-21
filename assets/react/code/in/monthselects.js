import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTabPractical from '../../partials/codeTabPractical';

class InMonthSelects extends React.Component {
    name() {
        return 'inMonthSelects';
    }
    
    title() {
        return 'MonthSelects( months, task )';
    }

    argument() {
        return [
          'months [ Array ] * exp: [6, 7, 8]',
          'task [ Function ]'
        ];
    }


    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>MonthSelects</code> method return callback, when you want run <strong>months</strong>.  </span>);
    }

    code() {
        var code = `/* selftimer.js */

// initialize
var st = new SelfTimer(new Date());

// MonthSelects() usage
st.in().MonthSelects([7, 8], function() {
  console.log('this method run in July to August!');
});

// non-callback
if( st.in().MonthSelects([7, 8]) )
{
  // callback
  console.log('this method run in July to August!');
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

// MonthSelects() usage
st.in()
    .MonthSelects([7, 8])
      .then(function() {
        // callback
        console.log('this method run in July to August!');
      });
    
// use 'catch' method
st.in()
    .MonthSelects([7, 8])
      .then(function() {
          // callback
          console.log('this method run in July to August!');
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
    
    example() {
        var code = `/* selftimer.js */
        
// initialize
var st = new SelfTimer(new Date());
        
// this method run in July to August on Satruday and Sunday.
st.in().MonthSelects([7, 8], function() {
  // callback
  st.on().Weekend(function(){
    // callback
    console.log('We have "Summer Sales" July to August on Weekend ! ')
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
              <CodeTabPractical
                id_1="inMonthSelectsCallback"
                code_1={this.code()}
                id_2="inMonthSelectsPromise"
                code_2={this.code2()}
                id_3="inMonthSelectsPractical"
                code_3={this.example()}
              />

              <JumpList />
              <hr/>
            </div>
        );
    }
}

module.exports = InMonthSelects;
