import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class Selects extends React.Component {
    name() {
        return 'onSelects';
    }

    title() {
        return 'Selects( daysOfTheWeek, task )';
    }

    argument() {
        return [
            'daysOfTheWeek [ Array ] * [Sun, Mon, Tue, Wed, Thu, Fri, Sat]',
            'task [ Function ] '];
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>Selects</code> method return callback, when you want to run <strong><u>days of the week</u></strong> ( * Sunday to Saturday ) you selected. </span>);
    }

    code() {
        var code = `/* selftimer.js */
        
// initialize
var st = new SelfTimer(new Date());

// Selects() * run Monday, Wednesday, Friday.
st.on().Selects(["Mon", "Wed", "Fri"], function() {
  // callback
  console.log("run on Monday, Wednesday and Friday!");
});

// non-callback
if( st.on().Selects(["Tue", "Thu", "Sat", "Sun"]) )
{
  // callback
  console.log("run on Tuesday, Thuesday, Saturday and Sunday!");
}

if( ! st.on().Selects(["Tue", "Thu", "Sat", "Sun"]) )
{
  // callback
  console.log(" NOT run on Tuesday, Thuesday, Saturday and Sunday!");
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

// Selects() * run Monday, Wednesday, Friday.
st.on()
    .Selects(["Mon", "Wed", "Fri"])
      .then(function(){
        // callback
        console.log("run on Tuesday, Thuesday, Saturday and Sunday!");
      });

// use 'catch' method
st.on(true)
    .Selects(["Mon", "Wed", "Fri"])
      .then(function(){
        // callback
        console.log("run on Tuesday, Thuesday, Saturday and Sunday!");
        })
      .catch(function(){
        //callback
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
                id_1="onSelectsCallback"
                code_1={this.code()}
                id_2="onSelectsPromise"
                code_2={this.code2()}
              />

              <JumpList />
              <hr/>
            </div>
        );
    }
}

module.exports = Selects;
