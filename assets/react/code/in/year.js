import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTabPractical from '../../partials/codeTabPractical';

class InYear extends React.Component {
    name() {
        return 'inYear';
    }

    title() {
        return 'Year( Year, task )';
    }

    argument() {
        return [
            'Year [ Integer ] ',
            'task [ Function ] '];
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>Year</code> method return callback, when you want to run during <strong><u>Year</u></strong> ( * 2016, 2017 .. etc ). </span>);
    }

    code() {
        var code = `/* selftimer.js */

// initialize
var st = new SelfTimer(new Date());

// Year()
st.in().Year(2016, function() {
  // callback
  console.log("this method run, during years of 2016!");
});

// in() method is supported method chaining * Only callback
st.in()
  .Year(2016)
  .MonthSelects([7, 8], function(){
      console.log("this method run, in July and August, 2016!");
  });

// non-callback
if( st.in().Year(2016) )
{
  // callback
  console.log("this method run, during years of 2016!");
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

// Year()
st.in()
    .Year(2016)
    .then(function() {
      // callback
      console.log("this method run, during years of 2016!");
    });

// use 'catch' method
st.in(true)
    .Year(2016)
      .then(function() {
          // callback
          console.log("this method run, during years of 2016!");
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
        var code = ` /* use selftimer-promise.js with ES6 syntax */
        
// initialize
var st = new SelfTimer(new Date());

// this method run on Saturday, November in 2016.
st.in().Year(2016).then(() => {

    // November
    st.in().Month(11).then(() => {

        // Saturday
        st.on(true)
            .Saturday()
              .then(() => {
                  // callback
                  console.log("it's Saturday!");
                })
              .catch(() => {
                  // callback
                  console.log("it's not Saturday!");
              });

    });

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

              <CodeTabPractical
                id_1="inYearCallback"
                code_1={this.code()}
                id_2="inYearPromise"
                code_2={this.code2()}
                id_3="inYearPractical"
                code_3={this.example()}
              />

              <JumpList/>
              <hr/>
            </div>
        );
    }
}

module.exports = InYear;
