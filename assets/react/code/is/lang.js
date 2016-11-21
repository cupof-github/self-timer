import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class IsLang extends React.Component {
    name() {
        return 'isLang';
    }

    title() {
        return 'Lang( language, task ) * Web-Browser only';
    }

    argument() {
        return [
            'language [ String ]',
            'task [ Function ] '
          ];
    }

    return () {
        return 'Function || Bool';
    }

    description() {
      return (<span><code>Lang</code> method return callback, when matching <strong>user-browser-langage</strong> to <strong>language-string</strong> in argument. ( * exp:  'en', 'fr', 'de', 'zh', 'ja')<br/>
        This is similar method to <code>Language</code>. but, this is <strong>sliced string to two characters</strong> (* 'en-us' -> 'en' || 'fr-ch' -> 'fr'　).
        <br/>
        Ref: <a href="https://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx" target="_blank">Language-code-reference (Microsoft)</a>
      </span>);
    }

    code() {
        var code = `/* selftimer.js */
        
// initialize
var st = new SelfTimer(new Date());

// Lang()
st.is().Lang('en', function() {
  // callback
  console.log("this method run if user-language is 'english'");
});

// non-callback
if( st.is().Language('en') )
{
  // callback
  console.log("this method run if user-language is 'english'");
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

// Lang()
st.is()
    .Lang('en')
      .then(function() {
        // callback
        console.log("this method run if user-language is 'english'");
      });

// with 'catch' method
st.is(true)
    .Lang('en')
      .then(function() {
          // callback
          console.log("this method run if user-language is 'english'");
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
                <li><code>.is()</code></li>
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
                id_1="isLangCallback"
                code_1={this.code()}
                id_2="isLangPromise"
                code_2={this.code2()}
              />

              <JumpList />


            </div>
        );
    }
}

module.exports = IsLang;
