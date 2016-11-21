import React from 'react';
import JumpList from './../../partials/jump-list';
import CodeTab from './../../partials/codeTab';

class IsLanguage extends React.Component {
    name() {
        return 'isLanguage';
    }

    title() {
        return 'Language( Language, task ) * Web-Browser only';
    }

    argument() {
        return [
            'Language [ String ]',
            'task [ Function ] '
          ];
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return (<span><code>Language</code> method return callback, when matching <strong>user-browser-langage</strong> to <strong>language-string</strong> in argument. ( * exp:  'en-au', 'en-us', 'fr-ch', 'fr-ca' ... etc )<br/>
          Ref: <a href="https://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx" target="_blank">Language-code-reference (Microsoft)</a>
        </span>);
    }

    code() {
        var code = `/* selftimer.js */

// initialize
var st = new SelfTimer(new Date());

// Language()
st.is().Language('en-us', function() {
  // callback
  console.log("this method run if user-language is 'en-us'");
});

// non-callback
if( st.is().Language('en-us') )
{
  // callback
  console.log("this method run if user-language is 'en-us'");
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

// Language()
st.is()
    .Language('en-us')
    .then(function() {
        // callback
        console.log("this method run if user-language is 'en-us'");
      });
      
// use 'catch' method
st.is(true)
    .Language('en-us')
      .then(function() {
          // callback
          console.log("this method run if user-language is 'en-us'");
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
                id_1="isLanguageCallback"
                code_1={this.code()}
                id_2="isLanguagePromise"
                code_2={this.code2()}
              />

              <JumpList />

              <hr/>
            </div>
        );
    }
}

module.exports = IsLanguage;
