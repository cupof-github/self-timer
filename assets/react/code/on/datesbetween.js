import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class DatesBetween extends React.Component {
    name() {
        return 'onDatesBetween';
    }

    title() {
        return 'DatesBetween( from, to, task )';
    }

    argument() {
      
        return [
              'from [ String ] * YYYY-MM-DD ',
              'to [ String ] * YYYY-MM-DD ',
              'task [ Function ] '
          ];
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>DatesBetween</code> method return callback, when you want to run <strong><u>between two dates</u></strong>.</span>);
    }

    code() {
        var code = `/* selftimer.js */
        
// initialize
var st = new SelfTimer(new Date());

// DatesBetween() * Nov 2, 2016 to Nov 17, 2016
st.on().DatesBetween('2016-11-2', '2016-11-17', function() {
  // callback
  console.log("do something on Nov 2, 2016 to Nov 17, 2016 !");
});

// non-callback Dec 24, 2016 to Dec 26, 2016
if( st.on().DatesBetween('2016-12-24', '2016-12-26') )
{
  // callback
  console.log("do somting on December 24, 2016 to December 26, 2016!");
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

// DatesBetween() * Nov 2, 2016 to Nov 17, 2016
st.on()
    .DatesBetween('2016-11-2', '2016-11-17')
      .then(function() {
        // callback
        console.log("do something on Nov 2, 2016 to Nov 17, 2016 !");
      });

// use 'catch' method
st.on(true)
    .DatesBetween('2016-11-2', '2016-11-17')
      .then(function() {
        // callback
        console.log("do something on Nov 2, 2016 to Nov 17, 2016 !");
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
                id_1="onDatesBetweenCallback"
                code_1={this.code()}
                id_2="onDatesBetweenPromise"
                code_2={this.code2()}
              />

              <JumpList />
              <hr/>
            </div>
        );
    }
}

module.exports = DatesBetween;
